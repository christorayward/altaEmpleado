altaEmpleado = () => {
    var doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'letter',
        putOnlyUsedFonts: false,
        floatPrecision: 16 // or "smart", default is 16
    });
    // Optional - set properties on the document
    doc.setProperties({
        title: 'FICHA ALTA EMPLEADO ' + nombres_Personal + " " + aPaterno_Personal + " " + aMaterno_Personal,
        subject: 'ALTA EMPLEADO',
        author: 'VIVEVOLANDO',
        creator: 'Christopher S.'
    });
    //doc.text("Hello world!", 10, 10);

    doc.rect(25, 45, 166, 160, 'S');
    doc.rect(24.5, 44.5, 167, 161, 'S');
    doc.line(25,104,191,104);
    doc.line(25,152,191,152);

    doc.setLineWidth(0.4); //By default, the value equals 0.2 mm
    doc.line(30,52.8,75.1,52.8);
    doc.line(30,112.8,71,112.8);
    doc.line(30,160.8,122.5,160.8);

    doc.addImage(vvlogo, 79.95, 12, 56, 26);
    //Tamaño carta en mm: 215.9 cm x 279.4 cm

    doc.setFontSize(14);
    doc.setFontType('bold');
    doc.text(78.25, 42, 'FICHA ALTA EMPLEADO');

    doc.setFontSize(12);
    doc.text(30, 52, 'DATOS PERSONALES');
    doc.setFontType('normal');
    doc.text(30, 58, 'NOMBRE COMPLETO:');
    doc.text(nombres_Personal + " " + aPaterno_Personal + " " + aMaterno_Personal, 76, 58);
    doc.text(30, 64, 'RFC:');
    doc.text(RFC_Personal, 41, 64);
    doc.text(30, 70, 'CURP:');
    doc.text(CURP_Personal, 44, 70);
    doc.text(30, 76, 'INE:');
    doc.text(INE_Personal, 39, 76);
    doc.text(30, 82, 'NÚMERO IMSS:');
    doc.text(noIMSS_Personal, 63, 82);
    doc.text(30, 88, 'NÚMERO CLÍNICA IMSS:');
    doc.text(noClinicaIMSS_Personal, 81, 88);
    doc.text(30, 94, 'TELÉFONO DE CONTACTO:');
    doc.text(tel_Personal, 87, 94);
    doc.text(30, 100, 'EMAIL DE CONTACTO:');
    doc.text(email_Personal, 77, 100);

    doc.setFontType('bold');
    doc.text(30, 112, 'DOMICILIO ACTUAL');
    doc.setFontType('normal');

    doc.text(30, 118, 'ESTADO:');
    doc.text(entfed_Personal, 50, 118);
    doc.text(30, 124, 'MUNICIPIO:');
    doc.text(mun_Personal, 55, 124);
    doc.text(30, 130, 'COLONIA:');
    doc.text(colonia_Personal, 52, 130);
    doc.text(30, 136, 'CALLE:');
    doc.text(calle_Personal, 46, 136);
    doc.text(30, 142, 'NÚMERO EXTERIOR:');
    doc.text(numExt_Personal, 74, 142);
    doc.text(30, 148, 'CÓDIGO POSTAL:');
    doc.text(cp_Personal, 68, 148);

    doc.setFontType('bold');
    doc.text(30, 160, 'DATOS BENEFICIARIO TARJETA DE NÓMINA');
    doc.setFontType('normal');
    doc.text(30, 166, 'NOMBRE COMPLETO:');
    doc.text(nombres_Benef, 76, 166);
    doc.text(30, 172, 'PARENTESCO:');
    doc.text(parentesco_Benef, 62, 172);
    doc.text(30, 178, 'RFC:');
    doc.text(RFC_Benef, 41, 178);
    doc.text(30, 184, 'ESTADO:');
    doc.text(entfed_Benef, 50, 184);
    doc.text(30, 190, 'MUNICIPIO:');
    doc.text(mun_Benef, 55, 190);
    doc.text(30, 196, 'CALLE Y NÚMERO:');
    doc.text(calle_Benef, 70, 196);
    doc.text(30, 202, 'CÓDIGO POSTAL:');
    doc.text(cp_Benef, 67, 202);

    window.open(doc.output('bloburl'));
    doc.save('FICHA ALTA EMPLEADO ' + nombres_Personal + " " + aPaterno_Personal + " " + aMaterno_Personal);

}