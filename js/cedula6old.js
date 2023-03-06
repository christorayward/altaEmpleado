cedula6 = () => {
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'letter',
        putOnlyUsedFonts: false,
        floatPrecision: 16 // or "smart", default is 16
    });
    // Optional - set properties on the document
    doc.setProperties({
        title: 'Cedula_6 ',
        subject: 'Cedula_6',
        author: 'VIVEVOLANDO',
        creator: 'Christopher S.'
    });
    //doc.text("Hello world!", 10, 10);
    doc.addImage(sctImg, 13.386, 14.383, 56.473, 20.997);
    doc.addImage(dgacImg, 178.135, 14.845, 22.0, 22.0);
    doc.rect(71.399, 15.698, 102.782, 19.597, 'T');
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.text(74.534, 21.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    doc.text(86.43, 26.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    doc.text(74.45, 32.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');
    doc.setFontSize(12);
    doc.setFontType('normal');
    doc.text(29.846, 40.055, 'DGAC');
    doc.setFontSize(15);
    doc.setFontType('bold');
    doc.text(100.805, 46.253, 'CEDULA 6');
    doc.setFontSize(12);
    doc.text(91.738, 52.693, 'CEDULA DE ALUMNO');
    doc.setFontSize(9);
    doc.text(65.133, 57.209, 'PARA ALTA DE CURSOS EN LOS CENTROS DE CAPACITACIÓN');
    doc.setFontType('normal');
    doc.setFontSize(8);
    doc.text(20.245,69.386,'UTILIZAR MÁQUINA DE ESCRIBIR O LETRA DE MOLDE');
    doc.text(20.245,73.088,'PARA SU ELABORACIÓN:');
    doc.setLineWidth(0.3); //By default, the value equals 0.2 mm
    doc.rect(117.551,62.835,74.401,11.761);
    doc.rect(118.25,63.532,72.982,10.359);
    doc.setLineWidth(0.2);
    doc.text(126.009, 67.658, 'SOLO PARA SER LLENADO POR LA DGAC.');
    doc.text(136.85, 71.341, 'DIRECCIÓN DE LICENCIAS');
    doc.setFontSize(9);
    doc.text(20.186, 80.626, '(01) AEROPUERTO: _____________________________  FECHA: _____________  No. ENTRADA:');
    doc.setLineWidth(0.5);
    doc.rect(168.18,76.361,28.056,6.37);
    doc.setLineWidth(0.2);
    doc.setFontType('bold');
    doc.text(122.639,89.083,'REVAL. /RECUP.                     RECUPERACIÓN')
    doc.text(20.186,93.551,'(02) FORMACIÓN          CAPACITACIÓN       CONVALIDACIÓN             DE LICENCIA                          CAPACIDAD')
    doc.rect(27.538,96.509,11.175,5.384);
    doc.rect(59.794,96.509,11.175,5.384);
    doc.rect(92.571,96.509,11.175,5.384);
    doc.rect(131.017,96.509,11.175,5.384);
    doc.rect(167.264,96.509,11.175,5.384);
    doc.rect(19.936,107.574,178.301,42.622);
    doc.setFontType('normal');
    doc.text(22.077,110.439,'(02 BIS)');
    doc.setFontType('bold');
    doc.text(34.465,110.439,'ANTECEDENTES:');
    doc.setLineWidth(0.5);
    doc.rect(50.125,113.21,33.772,6.251);
    doc.rect(50.125,122.196,33.772,6.251);
    doc.setLineWidth(0.2);
    doc.setFontType('normal');
    doc.setFontSize(8);
    doc.text(22.007,118.176,'CLAVE CENTRO:                                                                 NOMBRE DEL CENTRO:  ______________________________');
    doc.text(22.007,125.458,'CLAVE CURSO:                                                                   NOMBRE DE CURSO:      ______________________________');
    doc.text(22.007,134.771,'CLAVE GRUPO:    ________________________               NOMBRE DEL GRUPO:     ______________________________');
    doc.line(20.105,139.262,198.068,139.262);
    doc.setFontSize(9);
    doc.text(22.007,142.264,'No. PERMISO DEL                                          FECHA                                      FECHA');
    doc.text(22.007,145.905,'ALUMNO:       ______________________      INICIO: _________________   TERMINACIÓN:______________________');
    doc.rect(19.936,154.563,177.751,93.043);
    doc.setDrawColor(0)
    doc.setFillColor(255, 236, 154)
    doc.rect(21.648, 155.009, 41.869, 3.175, 'F')
    doc.text(22.048,157.309,'(03)');
    doc.setFontType('bold');
    doc.text(28.685,157.309,'DATOS PERSONALES:');
    doc.setFontType('normal');
    doc.text(22.048,163.437,'NOMBRE ______________________________________________________________________________________');
    doc.setFontSize(7);
    doc.text(52.113,166.705,'A.PATERNO                        A. MATERNO                                                     NOMBRE (S)');
    doc.setFontSize(9);
    doc.setFontType('bold');
    doc.text(23.013,172.408,'RFC.   _______________________________________    CURP:  ___________________________________________');
    doc.setFontType('normal');
    doc.text(45.96, 176.063,'( Con Homoclave )                                                                             ( Si lo posee )');
    doc.setDrawColor(0)
    doc.setFillColor(255, 236, 154)
    doc.rect(22.115, 181.278, 35.869, 3.175, 'F');
    doc.setFontType('bold');
    doc.text(22.115,183.634,'DOMICILIO PERSONAL:');
    doc.setFontType('normal');
    doc.text(22.007, 190.039,'CALLE:  ____________________________________________  No. EXTERIOR: __________ No. INT ___________');
    doc.text(22.007, 197.32,'COLONIA: __________________________________________  COD. POSTAL: _____________________________');
    doc.text(22.007, 204.601,'DELEG/MUNICIPIO:    _______________________________     TELEFONO:   ______________________________');
    doc.text(22.007, 212.301,'CIUDAD:    _________________________________________    ENTIDAD FED:   ____________________________');
    doc.text(22.007, 220.001,'LUGAR DE NACIMIENTO:       __________________________   NACIONALIDAD: _____________________________');
    doc.text(22.007, 227.001,'No. CARTILLA SERVICIO MILITAR NACIONAL:____________   FECHA LIBERAC: _____________________________');
    doc.text(22.007, 234.701,'OBSERVACIONES CARTILLA: _______________________________________________________________________');
    doc.setFontSize(8);
    doc.text(105,238.101,'(Solo para trámite inicial)');
    doc.setFontSize(9);
    doc.text(22.007, 243.201,'ESTADO CIVIL   ___________________________________________________________________________________');

    doc.setFontType('bold');
    doc.setFontSize(9.5);
    doc.text(20.289, 265.604, 'DGAC-MIL-CED-6');
    doc.setFontType('normal');
    doc.text(176.889, 260.701, 'Página 1 de 3');

    //Página 2//
    doc.addPage("letter", "p");
    doc.addImage(sctImg, 13.386, 14.383, 56.473, 20.997);
    doc.addImage(dgacImg, 178.135, 14.845, 22.0, 22.0);
    doc.rect(71.399, 15.698, 102.782, 19.597, 'T');
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.text(74.534, 21.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    doc.text(86.43, 26.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    doc.text(74.45, 32.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');

    
    doc.rect(19.936, 43.743, 178.301, 19.008);
    doc.setFontSize(9);
    doc.setFontType('normal');
    doc.text(24.583, 47.816, '(04)');
    doc.setFontType('bold');
    doc.text(31.183, 47.816, 'DATOS EMPRESA, INSTITUCIÓN, O CENTRO DE FORMACIÓN, CAPACITACIÓN Y ADIESTRAMIENTO:');
    doc.text(22.033, 55.169,'CLAVE                                          NOMBRE:      ________________________________________________________');
    doc.setLineWidth(0.5);
    doc.rect(36.951, 52.140, 28.981, 6.244);
    doc.setLineWidth(0.2);
    doc.rect(19.936,75.043,177.751,29.418);
    doc.setFontType('normal');
    doc.text(22.077,78.170,'(05)');
    doc.setFontType('bold');
    doc.text(28.685,78.170,'DATOS LICENCIAS:');
    doc.setFontType('normal');
    doc.text(22.077,85.908,'CLASE DE LICENCIA:______________________   NUMERO:_________________   No. PERMISO:__________________');
    doc.text(22.077,92.842,'FECHA EXPEDICIÓN ACTUAL:                                                FECHA VENCIMIENTO:');
    doc.setLineWidth(0.5);
    doc.rect(69.23,88.864,37.624,6.756);
    doc.rect(149.751,88.053,43.368,7.426);
    doc.text(22.077,100.223,'RESULTADO EXAMEN TEORICO:   _________________      RESULTADO EXA. PRACTICO.:');
    doc.rect(157.436,97.173,35.684,6.244);
    doc.setLineWidth(0.2);
    doc.rect(19.936,117.376,177.751,41.391);
    doc.setDrawColor(0)
    doc.setFillColor(255, 236, 154)
    doc.rect(22.678, 121.553,95.172, 3.175, 'F')
    doc.text(22.678,123.732,'(06)');
    doc.setFontType('bold');
    doc.text(29.278,123.732,'DATOS ESTUDIOS ESCOLARES: (solo para trámite inicial)');
    doc.text(163.989,127.547,'AÑOS');
    doc.line(19.936,128.179,197.517,128.179);
    doc.text(59.968,131.749,'NOMBRE INSTITUCIÓN EDUCATIVA                                                          DE      A       CERT.');
    doc.line(19.936,133.047,197.517,133.047);
    doc.setFontType('normal');
    doc.text(24.634,139.613,'PRIMARIA');
    doc.line(52.54,140.275,197.517,140.275);
    doc.text(24.634,145.832,'SECUNDARIA');
    doc.line(52.54,146.571,197.517,146.571);
    doc.text(24.634,152.028,'PREPARATORIA');
    doc.line(52.54,152.751,197.517,152.751);
    doc.text(24.634,158.030,'ESTUDIOS SUPERIORES');
    doc.line(162.423,128.279,162.465,158.854);  //Lineas horizontales
    doc.line(172.414,128.279,172.414,158.854);
    doc.line(182.489,128.279,182.489,158.854);

    










    doc.setFontType('bold');
    doc.setFontSize(9.5);
    doc.text(20.289, 265.604, 'DGAC-MIL-CED-6');
    doc.setFontType('normal');
    doc.text(176.889, 260.701, 'Página 2 de 3');

    //Página 3//
    doc.addPage("letter", "p");
    doc.addImage(sctImg, 13.386, 13.383, 56.473, 20.997);
    doc.addImage(dgacImg, 178.135, 13.845, 22.0, 22.0);
    doc.rect(71.399, 14.698, 102.782, 19.597, 'T');
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.text(74.534, 20.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    doc.text(86.43, 25.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    doc.text(74.45, 31.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');
    doc.rect(19.936, 44.560, 177.751, 50.006);
    doc.setFontSize(9)
    doc.setFontType('normal');
    doc.text(20.172, 50.972, '(09)');
    doc.setFontType('bold');
    doc.text(26.78, 50.972,
        'DATOS CURSOS DE FORMACIÓN, CAPACITACIÓN Y/O ADIESTRAMIENTO EN EL ÚLTIMO AÑO DE VIGENCIA:');
    doc.line(19.936, 54.763, 197.687, 54.763);
    doc.setFontType('normal');
    doc.text(22.042, 58.084,
        'CENTRO FORMACIÓN, CAPACITACIÓN Y/O                   CURSO:                 CLAVE                              FECHA'
    );
    doc.text(22.042, 61.724,
        'ADIESTRAMIENTO:                                                            (PROGRAMA)        GRUPO:');
    doc.text(151.851, 63.926, 'INICIO:           TERMINACIÓN:');
    doc.line(102.461, 54.763, 102.461, 94.397); //Comienzo Lineas Verticales
    doc.line(129.985, 54.763, 129.985, 94.397);
    doc.line(149.966, 54.763, 149.966, 94.397);
    doc.line(170.001, 59.927, 170.001, 94.397);
    doc.line(149.966, 59.927, 197.687, 59.927); //Comienzo Lineas Horizontales
    doc.line(19.936, 65.092, 197.687, 65.092);
    doc.line(19.936, 69.224, 197.687, 69.224);
    doc.line(19.936, 73.356, 197.687, 73.356);
    doc.line(19.936, 77.488, 197.687, 77.488);
    doc.line(19.936, 81.62, 197.687, 81.62);
    doc.line(19.936, 85.752, 197.687, 85.752);
    doc.line(19.936, 89.884, 197.687, 89.884);
    doc.rect(19.936, 103.221, 178.301, 34.629);
    doc.text(22.077, 106.163, '(10)');
    doc.setFontType('bold');
    doc.text(28.685, 106.163, 'DATOS LICENCIA:');
    doc.text(22.033, 113.861,
        'CLASE DE LICENCIA:_______________________________         NUMERO: ____________________________');
    doc.line(19.936, 118.392, 198.237, 118.392);
    doc.setFontType('normal');
    doc.text(22.144, 125.034,
        'FECHA REVALIDACION ACTUAL:                                                FECHA VENCIMIENTO:');
    doc.rect(72.088, 120.889, 36.475, 7.293);
    doc.rect(72.62, 121.422, 35.419, 6.228);
    doc.rect(149.039, 120.063, 43.202, 7.96);
    doc.rect(149.57, 120.592, 42.141, 6.9);
    doc.text(22.144, 136.049,
        'FECHA EXPEDICIÓN (INICIAL)____________________      LUGAR EXPEDICION (INICIAL):_____________________');
    doc.text(22.077, 144.162, '(11) DATOS FORMATO OACI (Si lo posee):');
    doc.rect(19.936, 140.813, 178.301, 21.359);
    doc.text(22.125, 151.143,
        'No. OACI:  _______________________________               FECHA EXPEDICIÓN:   _____________________________'
    );
    doc.line(19.936, 155.822, 198.237, 155.822);
    doc.text(22.125, 159.828, 'EMPRESA DONDE LABORA:');
    doc.rect(19.936, 166.335, 178.301, 68.553);
    doc.text(22.077, 171.766, '(12)');
    doc.setFontType('bold');
    doc.text(28.008, 171.766, ' DATOS CAPACIDADES REGISTRADAS PERSONAL DE VUELO Y/O CONVALIDACIÓN DE CAPACIDADES:');
    doc.line(19.936, 175.507, 198.237, 175.507);
    doc.setFontType('normal');
    doc.text(102.113, 180.5, 'PERIODO DE ADIESTRAMIENTO                     ACREDITADAS');
    doc.text(22.077, 185.6, 'TIPO DE CAPACIDAD         *AUTORIZADA');
    doc.text(68.924, 189.3, 'POR.');
    doc.text(142.522, 187.641, 'FECHA');
    doc.text(89.722, 191.282, 'HORAS     FECHA INICIO           TERMINACION                SI              NO')
    doc.setFontType('bold');
    doc.text(171.69, 196.828, '(   )             (   )');
    doc.text(171.69, 201.992, '(   )             (   )');
    doc.text(171.69, 207.157, '(   )             (   )');
    doc.text(171.69, 212.322, '(   )             (   )');
    doc.text(171.69, 217.497, '(   )             (   )');
    doc.text(171.69, 222.662, '(   )             (   )');
    doc.text(171.69, 227.826, '(   )             (   )');
    doc.text(171.69, 232.991, '(   )             (   )');
    doc.line(57.451, 175.507, 57.451, 234.752); //Empiezan lineas verticales
    doc.line(87.475, 175.507, 87.475, 234.752);
    doc.line(102.588, 182.000, 102.588, 234.752);
    doc.line(130.07, 182.000, 130.07, 234.752);
    doc.line(165.132, 175.507, 165.132, 234.752);
    doc.line(182.616, 182.000, 182.616, 234.752);
    doc.line(87.475, 182.000, 198.237, 182.000); //Empiezan líneas horizontales
    doc.line(19.936, 193.091, 198.237, 193.091);
    doc.line(19.936, 198.256, 198.237, 198.256);
    doc.line(19.936, 203.420, 198.237, 203.420);
    doc.line(19.936, 208.585, 198.237, 208.585);
    doc.line(19.936, 213.750, 198.237, 213.750);
    doc.line(19.936, 218.925, 198.237, 218.925);
    doc.line(19.936, 224.090, 198.237, 224.090);
    doc.line(19.936, 229.254, 198.237, 229.254);
    doc.setFontType('bold');
    doc.text(20.065, 238.152, '*INDICAR: (CON)');
    doc.setFontType('normal');
    doc.text(46.603, 238.152, 'CUANDO SEA CONVALIDACIÓN Y (REG) SI YA LA TENIA REGISTRADA ANTERIORMENTE.');
    doc.setFontType('bold');
    doc.setFontSize(9.5);
    doc.text(20.289, 265.604, 'DGAC-MIL-CED-0');
    doc.setFontType('normal');
    doc.text(176.889, 260.701, 'Página 3 de 5');

    //Página 4//
    doc.addPage("letter", "p");
    doc.addImage(sctImg, 13.386, 13.383, 56.473, 20.997);
    doc.addImage(dgacImg, 178.135, 13.845, 22.0, 22.0);
    doc.rect(71.399, 14.698, 102.782, 19.597, 'T');
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.text(74.534, 20.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    doc.text(86.43, 25.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    doc.text(74.45, 31.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');
    doc.rect(19.936, 40.869, 177.878, 52.012);
    doc.setFontType('normal');
    doc.setFontSize(9);
    doc.text(22.077, 47.246, '(13)');
    doc.setFontType('bold');
    doc.text(28.685, 47.246, 'DATOS CAPACIDADES REGISTRADAS PERSONAL DE TIERRA Y/O CONVALIDACIÓN DE CAPACIDADES:');
    doc.setFontType('normal');
    doc.text(61.782, 51.861,
        '*AUTORIZADA       PERIODO DE ADIESTRAMIENTO                                ACREDITADAS');
    doc.text(21.956, 55.801,
        'TIPO DE CAPACIDAD                 POR:                   FECHA DE INICIO              FECHA TERMINO');
    doc.setFontType('bold');
    doc.text(172.567, 55.801, 'SI              NO')
    doc.text(171.732, 60.438, '(   )             (   )');
    doc.text(171.732, 67.593, '(   )             (   )');
    doc.text(171.732, 74.789, '(   )             (   )');
    doc.text(171.732, 81.986, '(   )             (   )');
    doc.text(171.732, 89.140, '(   )             (   )');
    doc.line(19.936, 49.040, 197.644, 49.040); //Lineas Horizontales
    doc.line(87.475, 52.850, 197.644, 52.850);
    doc.line(19.936, 56.702, 197.644, 56.702);
    doc.line(19.936, 63.856, 197.644, 63.856);
    doc.line(19.936, 71.053, 197.644, 71.053);
    doc.line(19.936, 78.207, 197.644, 78.207);
    doc.line(19.936, 85.404, 197.644, 85.404);
    doc.line(57.451, 49.040, 57.451, 92.611); //Lineas Verticales
    doc.line(87.475, 49.040, 87.475, 92.611);
    doc.line(124.99, 52.850, 124.99, 92.611);
    doc.line(165.132, 49.040, 165.132, 92.611);
    doc.line(182.658, 52.850, 182.658, 92.611);
    doc.setFontSize(8);
    doc.text(20.109, 95.498, '*INDICAR: (CON)');
    doc.setFontType('normal');
    doc.text(43.707, 95.498, 'CUANDO SEA CONVALIDACIÓN Y (REG) SI YA LA TENIA REGISTRADA ANTERIORMENTE.');
    doc.rect(19.936, 100.697, 177.751, 60.975);
    doc.setFillColor(255, 236, 154)
    doc.rect(28.385, 104.545, 100.469, 3.175, 'F')
    doc.setFontSize(9);
    doc.text(22.077, 107.145, '(14)');
    doc.setFontType('bold');
    doc.text(28.685, 107.145, 'DATOS DE LA PERSONA A NOTIFICAR EN CASO DE ACCIDENTE.');
    doc.text(20.128, 114.394, 'CURP:');
    doc.line(32.647, 114.194, 96.878, 114.194);
    doc.setFontType('normal');
    //doc.text(43.747,113.294,CURP_Acc); //CURP Persona Notificar
    doc.text(102.736, 114.394, 'RFC:');
    doc.line(112.647, 114.194, 188.878, 114.194);
    //doc.text(139.747,113.294,RFC_Acc); //RFC Persona Notificar
    doc.setFontType('normal');
    doc.text(54.766, 118.123,
        '( Si lo posee )                                                                         ( Con Homoclave )');
    doc.text(22.125, 125.446,
        'NOMBRE ______________________________________________________________________________________');
    doc.text(39.412, 129.857,
        '     A. PATERNO                              A. MATERNO                           NOMBRE(S)');
    //doc.text(42.412,125.046,aPaterno_Acc); //Apellido Paterno Persona Notificar
    //doc.text(89,125.046,aMaterno_Acc); //Apellido Materno Persona Notificar
    //doc.text(132,125.046,nombres_Acc); //Nombres Persona Notificar
    doc.text(22.128, 136.368, 'DOMICILIO:');
    doc.text(22.042, 141.051,
        'CALLE: _____________________________________________  No. EXTERIOR: __________ No. INT ___________');
    //doc.text(35.0,140.851,calle_Acc); //Calle Persona Notificar
    //doc.text(141,140.851,noExt_Acc); //Número Exterior Persona Notificar
    //doc.text(172,140.851,noInt_Acc); //Número Interior Persona Notificar
    doc.text(22.042, 147.112,
        'COLONIA: ___________________________________________ COD. POSTAL: _____________________________');
    //doc.text(39,146.951,colonia_Acc); //Colonia Persona Notificar
    //doc.text(140,146.951,cp_Acc); //Código Postal Persona Notificar
    doc.text(22.042, 152.208,
        'CIUDAD: ____________________________________________  DELEG/MUNI: ______________________________');
    //doc.text(38,152.008,cd_Acc); //Ciudad Persona Notificar
    //doc.text(139,152.008,mun_Acc); //Delegación o municipio Persona Notificar
    doc.text(22.042, 157.932,
        'ENTIDAD FED: _______________________________________  TELÉFONO: _______________________________');
    //doc.text(45.747,157.732,entfed_Acc); //Entidad Federativa Persona Notificar
    //doc.text(137,157.732,tel_Acc); //Teléfono Persona Notificar
    doc.rect(19.936, 166.363, 177.751, 77.00);
    doc.text(22.077, 172.779, '(15)');
    doc.setFontType('bold');
    doc.text(28.454, 172.779, 'ANEXOS:');
    doc.setFontType('normal');
    doc.text(43.928, 172.779,
        '(Esta documentación deberá ser resguardada en Comandancia en caso de tramites foráneos)');
    doc.setFontSize(8);
    doc.text(42.056, 180.607, 'COPIA DE ÚLTIMA HOJA DE BITÁCORA DE VUELO, HORAS DE VUELO DE ADIESTRAMIENTO Y/O');
    doc.text(42.056, 183.866, 'CAPACITACIÓN CERTIFICADAS.');
    doc.text(42.056, 190.343, 'COPIA CERTIFICADO MEDICO.');
    doc.text(42.056, 196.863, 'COPIA DE LOS CERTIFICADOS O CONSTANCIAS POR CAPACIDAD (del Centro de Instrucción)');
    doc.text(42.056, 203.340, 'COPIA DE LICENCIA AERONAUTICA.');
    doc.text(42.056, 209.817,
        'DOCUMENTOS DE CONVALIDACION S.D.N. (Para obtención de licencia solo en la Dirección de Licencias)');
    doc.text(42.056, 216.346,
        'COPIA RECIBO DE PAGO: No. RECIBO:                                                       FECHA DE PAGO');
    doc.text(42.056, 222.823, 'COPIA ACTA DEL MINISTERIO PUBLICO O DE LA AUTORIDAD AERONAUTICA.');
    doc.text(42.056, 226.083, '(Por perdida de Licencia o Bitácora de Vuelo)');
    doc.text(42.056, 232.560, 'APOSTILLADOS (Documentos correspondientes en Convalidación).');
    doc.text(42.056, 238.558, 'COPIA CONSTANCIA DE CALIFICACIONES Y RESULTADOS EXAMEN PRÁCTICO.');
    doc.setFontSize(9);
    doc.setFontType('bold');
    doc.text(28.28, 181.376, '(   )');
    doc.text(28.28, 190.343, '(   )');
    doc.text(28.28, 196.863, '(   )');
    doc.text(28.28, 203.340, '(   )');
    doc.text(28.28, 209.817, '(   )');
    doc.text(28.28, 216.346, '(   )');
    doc.text(28.28, 223.823, '(   )');
    doc.text(28.28, 232.560, '(   )');
    doc.text(28.28, 238.558, '(   )');
    doc.rect(19.976, 177.607, 20.496, 65.74); //Rectangulo Vertical
    doc.rect(20.356, 178.007, 19.696, 64.89); //Rectangulo Vertical
    doc.rect(97.893, 211.014, 29.704, 8.678);
    doc.rect(98.482, 211.581, 28.53, 7.502);
    doc.rect(164.052, 210.434, 29.704, 8.678);
    doc.rect(164.623, 211.001, 28.53, 7.502);
    doc.setFontType('bold');
    doc.setFontSize(9.5);
    doc.text(20.289, 265.604, 'DGAC-MIL-CED-0');
    doc.setFontType('normal');
    doc.text(176.889, 260.701, 'Página 4 de 5');

    //Página 5//
    doc.addPage("letter", "p");
    doc.addImage(sctImg, 13.386, 13.383, 56.473, 20.997);
    doc.addImage(dgacImg, 178.135, 13.845, 22.0, 22.0);
    doc.rect(71.399, 14.698, 102.782, 19.597, 'T');
    doc.setFontSize(12);
    doc.setFontType('bold');
    doc.text(74.534, 20.105, 'DIRECCIÓN GENERAL DE AERONÁUTICA CIVIL');
    doc.text(86.43, 25.693, 'DIRECCIÓN DE SEGURIDAD AÉREA');
    doc.text(74.45, 31.288, 'DIRECCIÓN DE CERTIFICACIÓN DE LICENCIAS ');
    doc.rect(19.936, 44.832, 178.301, 55.907);
    doc.setFillColor(255, 236, 154);
    doc.rect(22.077, 45.397, 58.069, 3.175, 'F');
    doc.setFontType('normal');
    doc.setFontSize(9);
    doc.text(22.077, 47.797, '(16) ');
    doc.setFontType('bold');
    doc.text(30.463, 47.797, 'DATOS DE ENVIO DE LICENCIA:');
    doc.text(21.994, 55.075, 'SOLICITO QUE MI LICENCIA SEA ENTREGADA EN LA COMANDANCIA DEL AEROPUERTO DE:');
    doc.line(19.936, 63.475, 198.068, 63.475);
    doc.setFontType('normal');
    //doc.text(26,62.275,entregaLic_Personal); //Entre Licencia Usuario
    doc.text(21.994, 69.937, 'O EN LA DIRECCIÓN DE LICENCIAS DGAC (    )');
    doc.setFillColor(255, 236, 154)
    doc.rect(21.877, 74.461, 15, 3.175, 'F')
    doc.text(21.994, 77.261, 'NOMBRE:  _______________________________________________________________________');
    //doc.text(40,76.861,nombres_Personal +" "+ aPaterno_Personal + " " + aMaterno_Personal);
    doc.line(79.355, 92.727, 133.00, 92.727);
    doc.setFillColor(255, 236, 154)
    doc.rect(103.55, 93.409, 11.8, 3.175, 'F')
    doc.setFontSize(10);
    doc.text(103.85, 96.209, 'FIRMA');
    doc.setFontSize(9.05);
    doc.text(30.252, 120.197,
        'BAJO PROTESTA DE DECIR VERDAD, DECLARO QUE LA INFORMACIÓN ASENTADA POR PARTE DE ESTA');
    doc.setFontSize(8.92);
    doc.text(30.252, 123.852,
        'AUTORIDAD  AERONÁUTICA  EN  CADA  UNO  DE  LOS  FORMATOS  Y  DOCUMENTOS  QUE  INTEGRAN  EL');
    doc.setFontSize(9.19);
    doc.text(30.170, 127.979,
        'EXPEDIENTE DE SOLICITUD RESPECTIVO, SON FIDEDIGNOS; APERCIBIDO DE LA RESPONSABILIDAD Y');
    doc.setFontSize(9.23);
    doc.text(30.252, 132.213,
        'SANCIONES A LAS QUE ME HAGO ACREEDOR, ESTABLECIDAS EN LA LEY PENAL, EN LA LEY FEDERAL');
    doc.text(30.252, 136.567,
        'DE RESPONSABILIDADES DE LOS SERVIDORES PÚBLICOS, Y EN LAS DEMÁS LEYES Y REGLAMENTOS');
    doc.text(30.252, 140.995, 'APLICABLES.');
    doc.line(31.147, 169.033, 78.356, 169.033);
    doc.line(138.498, 169.051, 182.831, 169.051);
    doc.setFontSize(8);
    doc.text(38.108, 174.257, 'NOMBRE Y FIRMA');
    doc.text(30.238, 178.448, 'DE LA AUTORIDAD AERONAUTICA ');
    doc.text(30.142, 182.850, 'QUE VALIDA LA INFORMACIÓN');
    doc.setFontSize(11);
    doc.text(151.373, 174.486, 'SELLO');
    doc.setFontSize(10);
    doc.text(139.547, 182.763, 'AUTORIDAD AERONÁUTICA');













    doc.setFontType('bold');
    doc.setFontSize(9.5);
    doc.text(20.289, 265.604, 'DGAC-MIL-CED-0');
    doc.setFontType('normal');
    doc.text(176.889, 260.701, 'Página 5 de 5');


    //doc.line(0,0,215.9,279.4);
    //Tamaño carta en mm: 215.9 cm x 279.4 cm
    //doc.line(0,279.4,215.9,0);
    window.open(doc.output('bloburl'));
    
}