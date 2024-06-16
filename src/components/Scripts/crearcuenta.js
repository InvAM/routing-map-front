
export default {
  data() {
    return {
      user: {
        name: ''
      },
      rules: {
        required: value => !!value || 'Este campo es requerido',
      },
    };
  },
};
