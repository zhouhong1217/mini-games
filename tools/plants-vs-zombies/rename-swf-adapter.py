#!/usr/bin/env python3
"""重写 DoABC 字符串表的兼容类名与独立存档 ID；不改指令或索引。"""
from pathlib import Path
import sys, struct, zlib, json

def u30(b,p):
    v=0
    for i in range(5):
        n=b[p];p+=1;v|=(n&127)<<(7*i)
        if not n&128:return v,p
    raise ValueError('Invalid U30')

def enc(v):
    r=bytearray()
    while v>127:r.append((v&127)|128);v>>=7
    r.append(v);return r

def rename_abc(b):
    p=4
    # int, uint, double pools
    for _ in range(2):
        n,p=u30(b,p)
        for _ in range(1,n):v,p=u30(b,p)
    n,p=u30(b,p);p+=max(0,n-1)*8
    n,p=u30(b,p);result=bytearray(b[:p]);changes=[]
    for i in range(1,n):
        size,p=u30(b,p);s=b[p:p+size];p+=size
        t=s.replace(b'MSNAdAPI',b'LocalPlatformAPI')
        if t==b'pvz':t=b'plants-vs-zombies-4399-v1'
        if t!=s:changes.append({'index':i,'before':s.decode('utf-8'),'after':t.decode('utf-8')})
        result+=enc(len(t));result+=t
    result+=b[p:]
    return bytes(result),changes

src=Path(sys.argv[1]);dst=Path(sys.argv[2]);data=src.read_bytes()
if data[:3]==b'CWS':data=b'FWS'+data[3:8]+zlib.decompress(data[8:])
assert data[:3]==b'FWS' and len(data)==struct.unpack_from('<I',data,4)[0]
nbits=data[8]>>3;header_end=8+(5+4*nbits+7)//8+4
result=bytearray(data[:header_end]);p=header_end;all_changes=[]
while p<len(data):
    tag=struct.unpack_from('<H',data,p)[0];p+=2;kind=tag>>6;size=tag&63
    if size==63:size=struct.unpack_from('<I',data,p)[0];p+=4
    body=data[p:p+size];p+=size
    if kind==82:
        abcstart=body.index(b'\0',4)+1
        abc,changes=rename_abc(body[abcstart:]);body=body[:abcstart]+abc;all_changes+=changes
    result+=struct.pack('<H',(kind<<6)|63)+struct.pack('<I',len(body))+body
assert any(x['before']=='MSNAdAPI' for x in all_changes), 'Expected class name missing'
result[4:8]=struct.pack('<I',len(result))
dst.write_bytes(b'CWS'+bytes(result[3:8])+zlib.compress(result[8:],9))
print(json.dumps({'input':str(src),'output':str(dst),'changes':all_changes},indent=2))
