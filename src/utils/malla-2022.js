import {NAR,VER,AZUL,CEL} from './colors';
export const ramos2022 = [
    {
        id: 1,
        code: 'MED841',
        course: 'Anatomía General y del Desarrollo',
        cr:10,
        year: 1,
        semester: 'I',
        cc:NAR,
        req:[]
    },
    {
        id: 2,
        code: 'QIM100F',
        course: 'Química',
        cr:10,
        year: 1,
        semester: 'I',
        cc:NAR,
        req:[]
    },
    {
        id: 3,
        code: 'ENF1124',
        course: 'Psicología',
        cr:10,
        year: 1,
        semester: 'I',
        cc:NAR,
        req:[]
    },
    {
        id: 4,
        code: 'ENF1112',
        course: 'Naturaleza de la Enfermería',
        cr:5,
        year: 1,
        semester: 'I',
        cc:VER,
        req:[]
    },
    {
        id: 5,
        code: 'ENF1127',
        course: 'Salud, Cultura y Sociedad Global',
        cr:10,
        year: 1,
        semester: 'I',
        cc:VER,
        req:[]
    },
    {
        id: 6,
        code: 'ENF1133',
        course: 'Metodología de la Investigación',
        cr:5,
        year: 1,
        semester: 'I',
        cc:VER,
        req:[]
    },
    {
        id: 7,
        code: 'BIO136E',
        course: 'Bioquímica Celular',
        cr:10,
        year: 1,
        semester: 'II',
        cc:NAR,
        req:[
          
        ]
    },
    {
        id: 8,
        code: 'EYP1087',
        course: 'Bioestadística',
        cr:10,
        year: 1,
        semester: 'II',
        cc:NAR,
        req:[]
    },
    {
        id: 9,
        code: 'ENF1205',
        course: 'Cuidados de Enfermería I',
        cr:10,
        year: 1,
        semester: 'II',
        cc:AZUL,
        req:[
            {
                id:1
            }
        ]
    },
    {
        id: 10,
        code: 'ENF1212',
        course: 'Salud Pública',
        cr:10,
        year: 1,
        semester: 'II',
        cc:VER,
        req:[]
    },
    {
        id: 11,
        code: 'FIL2001',
        course: 'Filosofía',
        cr:10,
        year: 1,
        semester: 'II',
        cc:CEL,
        req:[]
    },
    {
        id: 12,
        code: 'BIO146E',
        course: 'Microbiología e Infectología Clinica',
        cr:10,
        year: 2,
        semester: 'III',
        cc:NAR,
        req:[
            {
                id:7
            }
        ]
    },
    {
        id: 13,
        code: 'BIO126E',
        course: 'Fisiología',
        cr:10,
        year: 2,
        semester: 'III',
        cc:NAR,
        req:[
            {
                id:7
            }
        ]
    },
    {
        id: 14,
        code: 'ENF2112',
        course: 'Cuidados E. de la Persona y Familia',
        cr:15,
        year: 2,
        semester: 'III',
        cc:AZUL,
        req:[
            {
                id:9
            },
            {
                id:6
            },
            {
                id:5
            },
            {
                id:10
            }
        ]
    },
    {
        id: 15,
        code: 'ENF2115',
        course: 'Educacion para la Salud',
        cr:5,
        year: 2,
        semester: 'III',
        cc:VER,
        req:[
            {
                id:9
            },
            {
                id:5
            }
        ]
    },
    {
        id: 16,
        code: 'FIL2001',
        course: 'Teológico',
        cr:10,
        year: 2,
        semester: 'III',
        cc:CEL,
        req:[]
    },
    {
        id: 17,
        code: 'MED839',
        course: 'Farmacología Clinica',
        cr:10,
        year: 2,
        semester: 'IV',
        cc:NAR,
        req:[
            {
                id:12
            },
            {
                id:13
            }
        ]
    },
    {
        id: 18,
        code: 'MED840',
        course: 'Fisiopatología G. y de Sistemas',
        cr:10,
        year: 2,
        semester: 'IV',
        cc:NAR,
        req:[
            {
                id:12
            },
            {
                id:13
            }
        ]
    },
    {
        id: 19,
        code: 'ENF2208',
        course: 'Cuidados de Enfermería II',
        cr:15,
        year: 2,
        semester: 'IV',
        cc:AZUL,
        req:[
            {
                id:5
            },
            {
                id:9
            },
            {
                id:4
            },
            {
                id:10
            }
        ]
    },
    {
        id: 20,
        code: 'ENF2215',
        course: 'Informatica en Salud',
        cr:5,
        year: 2,
        semester: 'IV',
        cc:VER,
        req:[]
    },
    {
        id: 21,
        code: 'ENF2220',
        course: 'Gestion y Liderazgo',
        cr:5,
        year: 2,
        semester: 'III',
        cc:VER,
        req:[]
    },
    {
        id: 22,
        code: 'XXXX',
        course: 'Formacion General',
        cr:10,
        year: 2,
        semester: 'IV',
        cc:CEL,
        req:[]
    },
    {
        id: 23,
        code: 'ENF2226',
        course: 'Cuidados E. Adulto y Persona Mayor',
        cr:20,
        year: 3,
        semester: 'V',
        cc:AZUL,
        req:[
            {
                id:17
            },
            {
                id:18
            },
            {
                id:10
            }
        ]
    },
    {
        id: 24,
        code: 'ENF2305',
        course: 'Dimension Interpersonal C.E',
        cr:10,
        year: 3,
        semester: 'V',
        cc:VER,
        req:[
            {
                id:10
            },
            {
                id:19
            },
        ]
    },
    {
        id: 25,
        code: 'XXXX',
        course: 'Formacion General',
        cr:10,
        year: 3,
        semester: 'V',
        cc:CEL,
        req:[]
    },
    {
        id: 26,
        code: 'XXXX',
        course: 'Formacion General',
        cr:15,
        year: 3,
        semester: 'V',
        cc:CEL,
        req:[]
    },
    {
        id: 27,
        code: 'ENF2325',
        course: 'Cuidados de E. en la i.A',
        cr:20,
        year: 3,
        semester: 'VI',
        cc:AZUL,
        req:[
            {
                id:14
            },
            {
                id:18
            },
            {
                id:19
            }
        ]
    },
    {
        id: 28,
        code: 'ENF2322',
        course: 'Fundamentos Etic. del Ejer. Prof.',
        cr: 10,
        year: 3,
        semester: 'VI',
        cc: VER,
        req: [
            {
                id: 14
            },
            {
                id: 19
            }
        ]
    },
    {
        id: 29,
        code: 'XXXX',
        course: 'OPR',
        cr: 10,
        year: 3,
        semester: 'VI',
        cc: VER,
        req: [
        ]
    },
    {
        id: 30,
        code: 'XXXX',
        course: 'Formación General',
        cr: 10,
        year: 3,
        semester: 'VI',
        cc: CEL,
        req: [
        ]
    },
    {
        id: 31,
        code: 'ENF2410',
        course: 'Enf. en Salud F.Comu.',
        cr: 20,
        year: 4,
        semester: 'VII',
        cc: AZUL,
        req: [
            {
                id: 28
            }
        ]
    },
    {
        id: 32,
        code: 'ENF2416',
        course: 'Cuidados de E. en S.Mental',
        cr: 10,
        year: 4,
        semester: 'VII',
        cc: AZUL,
        req: [
            {
                id: 28
            },
            {
                id: 23
            },
            {
                id: 27
            }
        ]
    },
    {
        id: 33,
        code: 'ENF2408',
        course: 'Investigacion',
        cr: 10,
        year: 4,
        semester: 'VII',
        cc: VER,
        req: [
            {
                id: 29
            }
        ]
    },
    {
        id: 34,
        code: 'XXXX',
        course: 'Formación General',
        cr: 10,
        year: 4,
        semester: 'VII',
        cc: CEL,
        req: [
        ]
    },
    {
        id: 35,
        code: 'ENF2420',
        course: 'Cuidados de Enfermería P.C.C.S',
        cr: 20,
        year: 4,
        semester: 'VIII',
        cc: AZUL,
        req: [
            {
                id: 23
            },
            {
                id: 27
            },
            {
                id: 24
            }
        ]
    },
    {
        id: 36,
        code: 'ENF2428',
        course: 'Informática en Salud II',
        cr: 5,
        year: 4,
        semester: 'VIII',
        cc: VER,
        req: [
            {
                id: 20
            },
        
        ]
    },
    {
        id: 37,
        code: 'ENF2335',
        course: 'Gestión y Liderazgo II',
        cr: 10,
        year: 4,
        semester: 'VIII',
        cc: VER,
        req: [
            {
                id: 28
            },
            {
                id: 21
            }
        ]
    },
    {
        id: 38,
        code: 'XXXX',
        course: 'OPR',
        cr: 10,
        year: 4,
        semester: 'VIII',
        cc: VER,
        req: []
    },
    {
        id: 39,
        code: 'XXXX',
        course: 'Formación General',
        cr: 10,
        year: 4,
        semester: 'VIII',
        cc: CEL,
        req: [
        ]
    },
    {
        id: 40,
        code: 'ENF2510',
        course: 'I. de Enfermería Hospitalario',
        cr: 25,
        year: 5,
        semester: 'IX',
        cc: AZUL,
        req: [
            {
                id: 31
            },
            {
                id: 33
            },
            {
                id: 35
            },
            {
                id: 37
            }
        ]
    },
    {
        id: 41,
        code: 'ENF2518',
        course: 'I. de Enf. en Urgencias',
        cr: 25,
        year: 5,
        semester: 'IX',
        cc: AZUL,
        req: [
            {
                id: 31
            },
            {
                id: 33
            },
            {
                id: 35
            },
            {
                id: 37
            }
        ]
    },
    {
        id: 42,
        code: 'ENF2515',
        course: 'I. de Enfermería Ambulatorio',
        cr: 25,
        year: 5,
        semester: 'X',
        cc: AZUL,
        req: [
            {
                id: 31
            },
            {
                id: 33
            },
            {
                id: 35
            },
            {
                id: 37
            }
        ]
    },
    {
        id: 43,
        code: 'ENF2530',
        course: 'Internado E.E',
        cr: 25,
        year: 5,
        semester: 'X',
        cc: AZUL,
        req: [
            {
                id: 31
            },
            {
                id: 33
            },
            {
                id: 35
            },
            {
                id: 37
            }
        ]
    },
    
];