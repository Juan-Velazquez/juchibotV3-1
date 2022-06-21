// Importamos la API de telegraf
require('dotenv').config();
const { Telegraf } = require('telegraf');
const verify = require('email-verify');
const sendmail = require('sendmail')();
const randid = require ('randid');
let linkExamenExtraordinario = 'https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/277221212_4996086167156626_120347486130663217_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeESMyJdN0SYhPlnz8ZBXw9fTqdBX_ulGq9Op0Ff-6Uar2SMmnCzl8syvxTM3o8CjkGFB5nspS5ScFuu7X038Fo2&_nc_ohc=75bVF-ytcfgAX8h7RjJ&tn=504e86scUxCFWB5I&_nc_ht=scontent.fvsa2-1.fna&oh=00_AT_5_x-Bgg5YBokYpQ7QkLn_SUQO-SKk4fWcTLf1U0nesw&oe=62A2C543';
let linkTituloInsuficiencia='https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/271600893_1324456981404395_7323942662973995893_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=825194&_nc_eui2=AeEfwNQL2BJhqE1g74HybnL1fZ3yvb7HEB59nfK9vscQHmnhgDgeqhWWbami9mAse9dTNR4mjmaOQFz4aB19lec8&_nc_ohc=o-q6EVDHeqQAX8xpvlu&_nc_ht=scontent.fvsa2-1.fna&oh=00_AT8RFdXV1Bdt4dak5UfoFqlUnHV4Wgu4_F-RfswFRB8Q-g&oe=62A315BE';
let linkBajademeterias='https://scontent.fvsa2-1.fna.fbcdn.net/v/t1.6435-9/100086899_2411483182475774_1846067241213231104_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGumHTOyZLAFWUR1xzgZhMqamyoPEcb3xFqbKg8RxvfEb1HQIptikCmECtiKC6Xw0u9LlyKhkyzMxt0alm3f7rF&_nc_ohc=lu9f3xN0xSkAX_YefWd&tn=504e86scUxCFWB5I&_nc_ht=scontent.fvsa2-1.fna&oh=00_AT86_POjOSpZUOSiAdiRd_J58CMpcSLz7V8-4uGNyxaLBQ&oe=62C1F65C';
let linkReinscripcion = 'https://pbs.twimg.com/media/Eb1l6uJWkAMuVef?format=jpg&name=large';
let linkBajaTemporalMateria = 'https://www.youtube.com/watch?v=I_vngaRhMB8';
let linkPreReinscripcion = 'https://twitter.com/xevtfm/status/1402766927039131649?s=20&t=1MWcYxXblVIQwJyfXi8g_w';
let linkCalendario = 'https://archivos.ujat.mx/2022/cal-escolares-2022-2023/Lienciatura.pdf';
let linkEcredencial = 'https://scontent.fvsa2-1.fna.fbcdn.net/v/t39.30808-6/274241767_3005167649746111_4050292015744744165_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG5_8TDZyF9rBxjktdUJOJt4Y-syB3vLNbhj6zIHe8s1rHQzmwJ8V5seW-uVwTGToBk2aK-ZpqWQIC6WMBeGjQz&_nc_ohc=n7GBzPm4VqMAX_goIMk&_nc_ht=scontent.fvsa2-1.fna&oh=00_AT9EDjTnfxFCc-ierFRh0ZofCLnWCe6EIDtvjoXA5-yEaA&oe=62A23BF6';
let enEspera = false;
let verificando = false;
let codigos = [];

// Hacemos la conexion con la API
const bot = new Telegraf(process.env.TOKEN);

bot.help(ctx =>{
    ctx.reply('comandos disponibles\n\n'+'/start Verificacion de alumnos mediante su matricula\n\n' + '/prereinscripcion Se adjunta el proceso para realizar la prereinscripción\n\n'+ '/reinscripcion Se adjunta el proceso para realizar la\n\n' + '/calendario Se adjunta Calendario 2022-2023\n\n' + '/tutoriales Se adjunta links directo a videos Tutoriales de los procesos, realizado por la UJAT\n\n' + '/examenextraordinario Se adjunta el proceso para realizar el proceso a examen Extraordinario\n\n' + '/bajatemporal Se adjunta el proceso para realizar el proceso para baja temporal\n\n' +'/bajamaterias Se adjunta el proceso para realizar el proceso para baja de materias\n\n' + '/ecredencial Se adjunta el proceso para tramitar\n\n' + '/exmaensuficiencia Se adjunta el proceso para realizar el tramite de solicitud de Examen de Titutolo de Suficiencia\n\n' +'/constanciaestudio Se adjunta el proceso para solicitar constancia de estudio de forma virtual');
});

bot.command(['prereinscripcion','Prereinscripcion','PREREINSCRIPCION'], ctx =>{
    ctx.reply('Proceso para realizar la prereinscripcion\n\n'+'1. Ingresar con tu matrícula y contraseña a www.sel.ujat.mx y selecciona Pre-reinscrición\n\n'+
    '2. Hacer click en el nombre de la asignatura para seleccionar grupos o eliminarlos (realiza este paso las veces que lo requieras hasta obtener el horario deseado con los créditos entre el mínimo y máximo de créditos del plan de estudios.\n\n'+
    '3. Al seleccionar un grupo, el sistema realiza un filtrado con los casos siguientes: otros horarios de la misma asignatura, cruce de horarios, asignatura seriada o cuando el total de créditos de las asignaturas y grupos seleccionados rebasen el máximo de créditos indicados en el plan de estudios. Al eliminar grupos se quita el filtro. El filtro se repite en cada acción sobre los grupos.\n\n'+
    '4. Podrá salir de los grupos aprobados, sin poner en riesgo la demanda calificada.\n\n',
    '5. Podrá eliminar por única vez el trámite realizado, sujeto a que no ponga en riesgo la demanda calificada. Para todos los grupos el número de alumnos debe ser mayor que la demanda.\n\n');
    ctx.replyWithPhoto(linkPreReinscripcion);
});
bot.command(['reinscripcion','Reinscripcion','REINSCRIPCION'],ctx=>{
    ctx.reply('Proceso para realizar la reinscripcion\n\n'+
    '1. Accede  a  www.ujat.mx en el módulo de Alumnos/ Acceso a los Sistemas/Reinscripción o ingresa a www.sel.ujat.mx apartado Alumnos/ Reinscripción.\n\n'+
    '2. Elige asignaturas, grupos y horarios de clases, verifica y guarda la propuesta de horario.\n\n'+
    '3. Si te corresponde pagar, imprime la referencia bancaria y realiza el pago en la fecha indicada, de lo contrario el banco no podrá efectuar el cobro.\n\n'+
    '4. Ingresa al sistema al día hábil siguiente de haber realizado el pago después de las 12:00 hrs, para confirmar e imprimir tu Formato Universal de Servicios (Tira de Materias), que te identifica como estudiante reinscrito\n\n'+
    '5. Al no concluir este trámite de acuerdo a los tiempos establecidos en el Calendarios Escolar Vigente, quedarás como estudiante no reinscrito y causará baja temporal automáticamente\n\n'+
    'Nota: Para información sobre el costo de este servicio, puede llamar al teléfono (993) 3 58 15 00 Ext. 6026 (Extensión de Finanzas UJAT).\n\n');
    ctx.replyWithPhoto(linkReinscripcion);
});

bot.command(('calendario'), ctx => {

    ctx.reply('Adjunto del calendario 2022-2023');
    ctx.replyWithDocument(linkCalendario)
});

bot.command(['tutoriales','Tutoriales','TUTORIALES'], ctx => {
    ctx.telegram.sendMessage(ctx.chat.id, 'Elige una opcion para mostrar el link de los videos tutorial',
    {
    reply_markup:{
        inline_keyboard:[
            [{text:"🎦Baja Temporal🎦",  url:"https://www.youtube.com/watch?v=I_vngaRhMB8"}],
            [{text:"🎦Examen Extraordinario🎦",  url: "https://www.youtube.com/watch?v=p2qtyq6FmDk"}],
            [{text:"🎦Baja de Materia🎦", url:"https://www.youtube.com/watch?v=I_vngaRhMB8"}],
            [{text:"🎦Solicitud e-Credencial🎦", url:"https://www.youtube.com/watch?v=WBoNjE647Os"}],
            [{text:"🎦Reinscripción🎦", url:"https://www.youtube.com/watch?v=vUByNcwFhe8"}],
            [{text:"🎦Pre-Reinscripcion🎦", url:"https://www.youtube.com/watch?v=FwDi8Bh7pgQ"}],
            [{text:"🎦Solicitud de Constancia de Estudios🎦", url:"https://www.youtube.com/watch?v=p1qXCnvfVQE"}
        ]   
        ]          
    }, 
        parse_mode:"HTML",
});
});

bot.command(['examenextraordinario','Examenextraordinario','EXAMENEXTRAORDINARIO'], ctx=>{
    ctx.reply('proceso para realizar socilitud de examen extraordinario\n\n'+
    '1. Accede  a  www.ujat.mx en el módulo de Alumnos/ Acceso a los Sistemas/Examen Extraordinario o ingresa a www.sel.ujat.mx apartado Alumnos/ Examen Extraordinario.\n\n'+
    '2. Elige asignaturas, verifica y guarda propuesta.\n\n'+
    '3. Si te corresponde pagar, imprime la referencia bancaria y realiza el pago en la fecha indicada, de lo contrario el banco no podrá efectuar el cobro.\n\n'+
    '4. Ingresa al sistema al día hábil siguiente de haber realizado el pago después de las 12:00 hrs, para confirmar e imprimir tu Formato Universal de Servicios Comprobante de solicitud de examen extraordinario.\n\n'+
    '5. Al no concluir este trámite de acuerdo a los tiempos establecidos en el Calendarios Escolar Vigente, quedarás como solicitud, y no podrás presentar tus exámenes extraordinarios.\n\n'+
    'Nota: Para información sobre el costo de este servicio, puede llamar al teléfono   (993) 3 58 15 00 Ext. 6026.\n\n')
    ctx.replyWithPhoto(linkExamenExtraordinario);
    
});
bot.command(['bajatemporal','Bajatemporal','BAJATEMPORAL '],ctx=>{
    ctx.reply(linkBajaTemporalMateria);
});
bot.command(['bajamaterias','Bajamaterias','BAJAMATERIAS'],ctx=>{
    ctx.reply(linkBajademeterias);
});
bot.command(['ecredencial','Ecredencial','ECREDENCIAL'],ctx=>{
    ctx.replyWithPhoto(linkEcredencial);
});
bot.command(['exmaensuficiencia', 'Examensuficiencia','EXAMENSUFICIENCIA'],ctx=>{
    ctx.replyWithPhoto(linkTituloInsuficiencia);
});
bot.command(['constanciaestudio','Constanciaestudio','CONSTANCIAESTUDIO'],ctx=>{
});

//Comando de quejas y sugerencias
bot.command(('quejas'), ctx => {
    ctx.reply('Tiene una queja o sugerencia? Ingresela aqui:');
    
});

bot.command(('verificar'), ctx => {
    ctx.reply('Ingresa el codigo recibido: ');
    verificando = true;
    setTimeout(() => {
        verificando = false
    }, 10000);
});

bot.start( ctx => {
    ctx.reply('Hola Juchiman, puedes proporcionarme tu matricula?');
    setTimeout(() => {
        enEspera = false;
    }, 10000);
    enEspera = true;

});


// Verificamos la matricula del alumno para saber si es alumno de la UJAT
bot.on('text', ctx => {
    if(enEspera == true) {
        const codigo = randid.generate();
        //Enviamos un correo de verificacion con un codigo al correo institucional con la dependencia Sendmail
        sendmail({
            from: 'noreply@reply.com',
            to: ctx.message.text + '@alumno.ujat.mx',
            subject: 'Verificacion de Usuario',
            html: codigo,
            }, function(err, reply) {
                if(err) {
                    ctx.reply('Ocurrio un error');
                    console.log(err);
                } else{
                    //Mensaje que se envio el correo correctamente
                    ctx.reply('Un codigo se ha enviado a tu correo institucional, ingresa el codigo enviado, utilizando el comando /verificar');
                    codigos.push(codigo);
                }
                enEspera=false;
        });
    } else if (verificando) {
        if(codigos.includes(ctx.message.text)){
            //Mensaje de verificacion correctamente
            ctx.reply('Verificado exitosamente.');
            ctx.reply('Puedes utilizar los siguientes comandos: \n /start Verificacion de alumnos mediante su matricula\n\n' + '/prereinscripcion Se adjunta el proceso para realizar la prereinscripción\n\n'+ '/reinscripcion Se adjunta el proceso para realizar la\n\n' + '/calendario Se adjunta Calendario 2022-2023\n\n' + '/tutoriales Se adjunta links directo a videos Tutoriales de los procesos, realizado por la UJAT\n\n' + '/examenextraordinario Se adjunta el proceso para realizar el proceso a examen Extraordinario\n\n' + '/bajatemporal Se adjunta el proceso para realizar el proceso para baja temporal\n\n' +'/bajamaterias Se adjunta el proceso para realizar el proceso para baja de materias\n\n' + '/ecredencial Se adjunta el proceso para tramitar\n\n' + '/exmaensuficiencia Se adjunta el proceso para realizar el tramite de solicitud de Examen de Titutolo de Suficiencia\n\n' +'/constanciaestudio Se adjunta el proceso para solicitar constancia de estudio de forma virtual');
        }
        //Mensaje que el codigo no es valido
        else ctx.reply('El codigo ingresado es invalido, prueba de nuevo');
        codigos = codigos.filter( codigo => codigo !== ctx.message.text);
    }
});
// Inicia el Bot

const PORT = process.env.PORT || 4000
bot.launch(PORT);
