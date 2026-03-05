// scripts/contar-productos.js
const fs = require('fs');
const path = require('path');

console.log('🔍 Leyendo archivo de productos...');

// Leer el archivo
const filePath = path.join(__dirname, '../data/productos.ts');
const content = fs.readFileSync(filePath, 'utf8');

// Extraer el array de productos usando regex más robusto
const match = content.match(/export const productos: Producto\[\] = (\[[\s\S]*?\]);/);
if (!match) {
  console.log('❌ No se pudo encontrar el array de productos');
  console.log('Primeras 200 caracteres del archivo:');
  console.log(content.substring(0, 200));
  process.exit(1);
}

try {
  // Crear un objeto global temporal para evaluar
  const temp = {};
  
  // Extraer también la interfaz si es necesario
  const interfaceMatch = content.match(/export interface Producto \{([\s\S]*?)\}/);
  
  // Evaluar solo el array (esto es seguro porque es tu código)
  const productos = eval('(' + match[1] + ')');
  
  console.log(`✅ Total productos encontrados: ${productos.length}`);
  
  // Contar por categoría
  const conteo = {};
  productos.forEach(p => {
    conteo[p.categoria] = (conteo[p.categoria] || 0) + 1;
  });
  
  console.log('\n📊 Productos por categoría:');
  Object.entries(conteo)
    .sort((a, b) => b[1] - a[1])
    .forEach(([cat, count]) => {
      console.log(`  ${cat}: ${count} productos`);
    });
    
  // Mostrar primeros 3 productos como ejemplo
  console.log('\n📝 Primeros 3 productos:');
  productos.slice(0, 3).forEach((p, i) => {
    console.log(`  ${i+1}. ${p.nombre} (${p.categoria})`);
  });
  
} catch (error) {
  console.log('❌ Error al evaluar:', error.message);
  console.log('Primeros 500 caracteres del array encontrado:');
  console.log(match[1].substring(0, 500));
}