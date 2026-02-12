export default {
    name: 'ordenActiva',
    title: 'Orden Activa (Mesa)',
    type: 'document',
    fields: [
        {
            name: 'mesa',
            title: 'Mesa / Cliente',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'mesero', // 🆕 CAMBIO CLAVE: Ahora Sanity aceptará y guardará este nombre
            title: 'Mesero / Atendido por',
            type: 'string',
        },
        {
            name: 'fechaCreacion',
            title: 'Fecha de Creación',
            type: 'datetime',
            initialValue: () => (new Date()).toISOString()
        },
        {
            name: 'platosOrdenados',
            title: 'Platos Ordenados',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {name: 'nombrePlato', type: 'string', title: 'Plato'},
                        {name: 'cantidad', type: 'number', title: 'Cantidad'},
                        {name: 'precioUnitario', type: 'number', title: 'Precio'},
                        {name: 'subtotal', type: 'number', title: 'Subtotal'},
                        { name: 'comentario', type: 'string', title: 'Notas de Cocina' },
                    ]
                }
            ],
            validation: Rule => Rule.required().min(1)
        },
        {
            name: 'imprimirSolicitada',
            title: '¿Enviar a Cocina? (Pendiente impresión)',
            type: 'boolean',
            initialValue: false
        },
        {
         name: 'imprimirCliente',
         title: '¿Imprimir Ticket Cliente?',
         type: 'boolean',
        initialValue: false
        },
        {
            name: 'ultimoKeyImpreso',
            title: 'Último ID de Plato Impreso',
            type: 'string',
            hidden: true // Se mantiene oculto para no confundir al usuario en el panel
        },
        {
            name: 'ultimaActualizacion',
            title: 'Última Actualización',
            type: 'datetime',
        }
    ],
    preview: {
        select: {
            title: 'mesa',
            mesero: 'mesero', // 🆕 Seleccionamos el mesero para la vista previa
            subtitle: 'fechaCreacion'
        },
        prepare(selection) {
            const {title, subtitle, mesero} = selection
            return {
                title: `Mesa: ${title} ${mesero ? `(${mesero})` : ''}`, // 🆕 Muestra "Mesa: 1 (Diana)"
                subtitle: new Date(subtitle).toLocaleString('es-CO')
            }
        }
    }
}