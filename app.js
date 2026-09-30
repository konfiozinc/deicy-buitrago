/* ============================================================
 * Deicy Yolima Buitrago Arismendy — lógica de la tarjeta
 * Extraído de index.html (estaba inline: ocupaba el 53% del HTML).
 * Se carga al final del body, en el mismo punto donde estaba, así que el
 * comportamiento es idéntico: cuando se ejecuta, el DOM ya está parseado.
 * ============================================================ */
'use strict';
var CONFIG = {
  nombre: 'Deicy Yolima Buitrago Arismendy',
  cargo: 'Administradora · Propiedad Horizontal',
  credenciales: 'Especialista en Gerencia · PNL Practitioner',
  lema: 'Compromiso, gestión y servicio para tu comunidad',
  telefono: '3054855538',
  whatsapp: '573054855538',
  email: 'administracion@deicybuitrago.com',
  portal: 'https://portal.aplicamos.co/login'
};

var SERVICIOS = [
  { id:'pagos', icono:'💳', titulo:'Pagos a proveedores', descripcion:'Ciclos de pago, requisitos y envío de facturas.', puntos:['Ciclos de pago','Requisitos para radicar facturas','Envío de soportes al correo','Seguimiento del estado'] },
  { id:'remodelaciones', icono:'🔨', titulo:'Remodelaciones o reformas', descripcion:'Normas, permisos y depósitos para obras.', puntos:['Normas internas','Permisos y autorización','Depósito de garantía','Horarios permitidos'] },
  { id:'trasteos', icono:'📦', titulo:'Trasteos y mudanzas', descripcion:'Horarios, depósito y requisitos.', puntos:['Horarios autorizados','Depósito (10 SMDLV)','Reserva de ascensor','Notificación previa'] },
  { id:'documentos', icono:'📄', titulo:'Solicitud de documentos', descripcion:'Paz y salvo, certificados, facturas y cobros.', puntos:['Paz y salvo','Certificados','Facturas y cobros','Entrega en 3 días hábiles'] },
  { id:'salon', icono:'🎉', titulo:'Reserva salón social', descripcion:'Reserva del salón por el portal Aplicamos.', puntos:['Reserva por Aplicamos','Disponibilidad y tarifas','Reglas de uso','Depósito y entrega'] },
  { id:'escombros', icono:'🗑️', titulo:'Línea amiga escombros', descripcion:'Recolección de residuos voluminosos y especiales.', puntos:['Colchones','Muebles','Madera e icopor','Escombros y residuos'] },
  { id:'canales', icono:'📢', titulo:'Canales de atención', descripcion:'Formas de contactar y autogestionar trámites.', puntos:['WhatsApp administración','Llamada y línea fija','Correo electrónico','Autogestión por Aplicamos'] },
  { id:'mudanza', icono:'⚠️', titulo:'Notificación de mudanza', descripcion:'Requisitos, depósitos y horarios.', puntos:['Notificar con anticipación','Requisitos y documentos','Depósitos y horarios','Coordinación de accesos'] }
];

var GALERIA = [
  { src: 'assets/galeria/aviso-02.png', titulo: 'Recordatorio de fechas de pago', descripcion: 'Ciclos de pago y documentos requeridos' },
  { src: 'assets/galeria/aviso-03.png', titulo: 'Normas de remodelación', descripcion: 'Reglas y permisos para obras en el apartamento' },
  { src: 'assets/galeria/aviso-04.png', titulo: 'Residuos especiales', descripcion: 'Cómo desechar colchones, muebles, madera, icopor y escombros' },
  { src: 'assets/galeria/aviso-05.png', titulo: 'Canales de atención', descripcion: 'WhatsApp, llamadas, correo y autogestión en línea' },
  { src: 'assets/galeria/aviso-06.png', titulo: 'Solicitud de documentos', descripcion: 'Paz y salvo, certificados, facturas y cobros (3 días hábiles)' },
  { src: 'assets/galeria/aviso-07.png', titulo: 'Trasteos y mudanzas', descripcion: 'Requisitos, depósito 10 SMDLV y horarios autorizados' },
  { src: 'assets/galeria/aviso-08.png', titulo: 'Reserva salón social', descripcion: 'Cómo reservar el salón social por el portal Aplicamos' },
  { src: 'assets/galeria/aviso-09.png', titulo: 'Tutorial Aplicamos', descripcion: 'Guía paso a paso para ingresar al portal' },
  { src: 'assets/galeria/aviso-10.png', titulo: 'Vista previa de servicios', descripcion: 'Captura del menú con dos servicios' },
  { src: 'assets/galeria/aviso-11.png', titulo: 'Lista de servicios', descripcion: 'Captura completa de los servicios de la app' },
  { src: 'assets/galeria/aviso-12.png', titulo: 'Banner motivacional', descripcion: '“La vida es como un espejo” · foto de Deicy' }
];

var indiceGaleria = 0;
var modoModal = null;

function $(id){ return document.getElementById(id); }
function escapar(t){ return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

function abrirModal(){ $('overlay').classList.add('activo'); document.body.style.overflow='hidden'; }
function cerrarModal(){ $('overlay').classList.remove('activo'); document.body.style.overflow=''; modoModal=null; }

/* ── Servicios (acordeón) ── */
function abrirServicios(){
  modoModal = 'servicios';
  var html = '<div class="modal-icono" aria-hidden="true">📋</div><h3>Servicios y trámites</h3><div class="acordeon" style="margin-top:12px">';
  SERVICIOS.forEach(function(s){
    var msg = 'Hola Deicy, necesito información sobre ' + s.titulo;
    var puntos = s.puntos.map(function(p){ return '<li>'+escapar(p)+'</li>'; }).join('');
    html += '<div class="acordeon-item">' +
      '<button class="acordeon-cab" type="button" aria-expanded="false"><span>'+s.icono+' '+escapar(s.titulo)+'</span><span class="chev">▾</span></button>' +
      '<div class="acordeon-cuerpo" hidden><p class="desc">'+escapar(s.descripcion)+'</p><ul class="puntos">'+puntos+'</ul>' +
      '<a class="boton" style="margin-top:4px" href="https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(msg)+'" target="_blank" rel="noopener">Consultar por WhatsApp</a></div></div>';
  });
  html += '</div>';
  $('modalBody').innerHTML = html;
  $('modalBody').querySelectorAll('.acordeon-cab').forEach(function(cab){
    cab.addEventListener('click', function(){
      var cuerpo = cab.nextElementSibling;
      var abierto = cuerpo.hasAttribute('hidden') === false;
      cuerpo.hidden = abierto;
      cab.setAttribute('aria-expanded', String(!abierto));
      cab.querySelector('.chev').textContent = abierto ? '▾' : '▴';
    });
  });
  abrirModal(); $('btnCerrar').focus();
}

/* ── Galería (carrusel modal) ── */
function pintarCarousel(){
  var g = GALERIA[indiceGaleria];
  var dots = '';
  GALERIA.forEach(function(_, i){ dots += '<span class="'+(i===indiceGaleria?'activo':'')+'"></span>'; });
  $('modalBody').innerHTML =
    '<div class="carrusel" id="carrusel">' +
    '<div class="carrusel-marco">' +
    '<img class="carrusel-img" src="'+g.src+'" alt="'+escapar(g.titulo)+'">' +
    '<button class="carrusel-nav prev" id="carPrev" type="button" aria-label="Anterior">‹</button>' +
    '<button class="carrusel-nav next" id="carNext" type="button" aria-label="Siguiente">›</button>' +
    '</div>' +
    '<div class="carrusel-cont">'+(indiceGaleria+1)+' / '+GALERIA.length+'</div>' +
    '<div class="carrusel-titulo">'+escapar(g.titulo)+'</div>' +
    '<div class="carrusel-desc">'+escapar(g.descripcion)+'</div>' +
    '<div class="carrusel-dots">'+dots+'</div></div>';
  $('carPrev').addEventListener('click', function(){ mover(-1); });
  $('carNext').addEventListener('click', function(){ mover(1); });
  var touchX = 0;
  var marco = $('carrusel');
  marco.addEventListener('touchstart', function(e){ touchX = e.touches[0].clientX; }, {passive:true});
  marco.addEventListener('touchend', function(e){
    var diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) mover(diff > 0 ? 1 : -1);
  }, {passive:true});
}
function mover(dir){
  indiceGaleria = (indiceGaleria + dir + GALERIA.length) % GALERIA.length;
  pintarCarousel();
}
function abrirGaleria(){
  modoModal = 'galeria';
  indiceGaleria = 0;
  pintarCarousel();
  abrirModal(); $('btnCerrar').focus();
}

/* ── Sobre Deicy ── */
function abrirSobre(){
  modoModal = 'sobre';
  $('modalBody').innerHTML =
    '<div class="modal-icono" aria-hidden="true">👤</div><h3>Sobre Deicy</h3>' +
    '<p class="desc">'+escapar(CONFIG.nombre)+'</p>' +
    '<ul class="puntos">' +
    '<li>'+escapar(CONFIG.cargo)+'</li>' +
    '<li>Especialista en Gerencia</li>' +
    '<li>PNL Practitioner</li>' +
    '</ul>' +
    '<p class="desc">“'+escapar(CONFIG.lema)+'”</p>';
  abrirModal(); $('btnCerrar').focus();
}

/* ── Compartir / vCard ── */
function compartir(){
  var url = 'https://konfiozinc.github.io/deicy-buitrago/';
  if (navigator.share) {
    navigator.share({ title: CONFIG.nombre + ' · ' + CONFIG.cargo, text: CONFIG.lema, url: url }).catch(function(){});
  } else if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(function(){ alert('✅ Enlace copiado'); }).catch(function(){ prompt('Copia el enlace:', url); });
  } else { prompt('Copia el enlace:', url); }
}
function guardarContacto(){
  var v = 'BEGIN:VCARD\nVERSION:3.0\nFN:' + CONFIG.nombre + '\nN:Buitrago Arismendy;Deicy Yolima;;;\nTITLE:' + CONFIG.cargo + '\nTEL;TYPE=CELL,VOICE:+57' + CONFIG.telefono + '\nEMAIL:' + CONFIG.email + '\nURL:' + CONFIG.portal + '\nNOTE:' + CONFIG.lema + '\nEND:VCARD';
  var blob = new Blob([v], { type:'text/vcard;charset=utf-8' });
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'Deicy_Buitrago.vcf';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(function(){ URL.revokeObjectURL(a.href); }, 1200);
}

/* ── Horario dinámico (Colombia) ── */
function horaBogota(){
  return new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Bogota' }));
}
function estadoAtencion(){
  var bog = horaBogota();
  var dia = bog.getDay(), hora = bog.getHours();
  var abierto = dia >= 1 && dia <= 5 && hora >= 9 && hora < 18;
  var nombres = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  var prox = dia;
  do { prox = (prox + 1) % 7; } while (prox === 0 || prox === 6);
  return { abierto: abierto, prox: nombres[prox] };
}
function pintarEstado(){
  var e = estadoAtencion();
  var badge = $('badgeEstado'), txt = $('estadoTexto'), prox = $('proxTexto');
  badge.className = 'badge-estado ' + (e.abierto ? 'abierto' : 'cerrado');
  txt.textContent = e.abierto ? 'Atención administrativa disponible' : 'Atención administrativa cerrada';
  prox.textContent = e.abierto ? '' : 'Próxima atención: ' + e.prox + ' 9:00 a.m.';
}

document.addEventListener('DOMContentLoaded', function(){
  $('c-nombre').textContent = CONFIG.nombre;
  $('c-cargo').textContent = CONFIG.cargo;
  $('c-credenciales').textContent = CONFIG.credenciales;
  $('c-lema').textContent = '“' + CONFIG.lema + '”';
  $('btnServicios').addEventListener('click', abrirServicios);
  $('btnGaleria').addEventListener('click', abrirGaleria);
  $('btnSobre').addEventListener('click', abrirSobre);
  $('btnCompartir').addEventListener('click', compartir);
  $('btnVcard').addEventListener('click', guardarContacto);
  $('btnCerrar').addEventListener('click', cerrarModal);
  $('overlay').addEventListener('click', function(e){ if (e.target === this) cerrarModal(); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') { cerrarModal(); }
    else if (modoModal === 'galeria') {
      if (e.key === 'ArrowLeft') mover(-1);
      if (e.key === 'ArrowRight') mover(1);
    }
  });
  $('anio').textContent = new Date().getFullYear();
  pintarEstado();
  setInterval(pintarEstado, 60000);

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function(){ navigator.serviceWorker.register('service-worker.js').catch(function(){}); });
  }
});
