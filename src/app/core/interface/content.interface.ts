export interface content {
    menu: Menu;
    simulador: Simulador;
    instrucciones: Instrucciones;
    aliados: Aliados;
    faq: Faq;
    midatacredito: Midatacredito;
    footer: Footer;
    informacion: Informacion;
    listing: Listing;
}
interface Menu {
    txtreg: string;
    txtlog: string;
    txtcomo: string;
    txtaliados: string;
    txthelp: string;
}
interface Simulador {
    titulo1: string;
    titulo2: string;
    txtinfo: string;
    txtstep1: string;
    txtstep2: string;
}
interface Instrucciones {
    titulo: string;
    paso1titulo: string;
    paso1info: string;
    paso2titulo: string;
    paso2info: string;
    paso3titulo: string;
    paso3info: string;
}
interface Aliados {
    titulo: string;
}
interface Faq {
    titulo: string;
    subtitulo: string;
    linkfaq: string;
    txt1: string;
    txt2: string;
    txt3: string;
    txt4: string;
    txt5: string;
    txt6: string;
}
interface Midatacredito {
    titulo: string;
    texto: string;
    info: string;
}
interface Footer {
    seccion1: Seccion1;
    seccion2: Seccion2;
    seccion3: Seccion3;
}
interface Seccion1 {
    titulo: string;
    textos: Textos;
    links: Links;
}
interface Textos {
    txt1: string;
    txt2: string;
    txt3: string;
    txt4: string;
}
interface Links {
    url1: string;
    url2: string;
    url3: string;
    url4: string;
}
interface Seccion2 {
    titulo: string;
    textos: Textos;
    links: Links;
}
interface Seccion3 {
    titulo: string;
    textos: Textos;
    links: Links;
}
interface Informacion {
    personal: Personal;
    adicional: Adicional;
    buscar: Buscar;
    terminos: Terminos;
}
interface Personal {
    titulo: string;
    label: Label;
    placeholder: Placeholder;
}
interface Label {
    nombre?: string;
    apellido?: string;
    tipo?: string;
    documento?: string;
    email?: string;
    telefono?: string;
    departamento?: string;
    ciudad?: string;
    direccion?: string;
    ocupacion?: string;
    ingresos?: string;
}
interface Placeholder {
    nombre?: string;
    apellido?: string;
    documento?: string;
    email?: string;
    telefono?: string;
    direccion?: string;
    ingresos?: string;
}
interface Adicional {
    titulo: string;
    label: Label;
    placeholder: Placeholder;
}
interface Buscar {
    titulo: string;
}
interface Terminos {
    link1: string;
    link2: string;
}
interface Listing {
    titulo: string;
    oferta: Oferta;
}
interface Oferta {
    producto: string;
    info: string;
    cta: string;
}

// @Injectable()
// export abstract class ContentService {
//   /**
//    * Returns a list of all of the current user's todos.
//    */
//   abstract getContent(): content[];
// }