export default {
  name: 'plato',
  title: 'Platos del Menú',
  type: 'document',
  fields: [
    {
      name: 'nombre',
      title: 'Nombre del Plato',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'precio',
      title: 'Precio',
      type: 'number',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'categoria',
      title: 'Categoría',
      description: 'Seleccione una categoría creada en el panel de Categorías',
      type: 'reference', // Cambiado de string a referencia para ser editable por el cliente
      to: [{ type: 'categoria' }], // Debe coincidir con el nombre del esquema de categorías
      validation: Rule => Rule.required()
    },
    {
      name: 'imagen',
      title: 'Foto del Plato',
      type: 'image',
      options: { 
        hotspot: true 
      }
    },
    {
      name: 'disponible',
      title: '¿Está Disponible?',
      type: 'boolean',
      initialValue: true,
      description: 'Si se desactiva, el plato no aparecerá en el POS'
    }
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'categoria.titulo', // Muestra el nombre de la categoría en la vista previa
      media: 'imagen'
    }
  }
}