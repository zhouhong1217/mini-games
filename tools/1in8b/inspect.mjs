import { readFile } from 'node:fs/promises';
import { parse } from './node_modules/acorn/dist/acorn.mjs';
import { fullAncestor } from './node_modules/acorn-walk/dist/walk.mjs';
const source = await readFile(process.argv[2], 'utf8');
const ast = parse(source,{ecmaVersion:'latest',sourceType:'script'});
const wanted = new Set(process.argv.slice(3));
fullAncestor(ast,(node,state,parents)=>{
 if ((node.type==='FunctionDeclaration'||node.type==='VariableDeclarator')&&node.id?.name&&wanted.has(node.id.name)) {
   console.log('\nSYMBOL '+node.id.name+'\n'+source.slice(node.start,node.end));
 }
 if(wanted.has('@requests')&&node.type==='CallExpression'&&['fetch','keepPost','apiList'].includes(node.callee.name)) {
   const owner=parents.slice().reverse().find(n=>n.type==='FunctionDeclaration');
   console.log('REQUEST '+(owner?.id.name||'top')+' '+source.slice(node.start,Math.min(node.end,node.start+250)));
 }
});
