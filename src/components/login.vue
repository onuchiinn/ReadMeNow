<template lang="pug">
.modal-auth
	.modal-dialog
		button.close-auth X
		form
			fieldset.modal-body
				legend.modal-title Авторизация
				label.label-auth
					span Логин
					input(type='text', placeholder='Введите логин')
				label.label-auth
					span Пароль
					input(type='password', placeholder='Введите пароль')
			input(type='submit')
</template>

<script>

export default {
  name: "login",
  components: {
  },
  props: {},
  data() {
    return {
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {}
};
</script>

<style lang="scss">
.modal-auth {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
}

.modal-dialog {
    max-width: 450px;
    width: 95%;
    background: #ffffff;
    border-radius: 5px;
    margin: 40vh auto;
    padding: 40px 45px;
    position: relative;
}
.close-auth {
    position: absolute;
    top: 10px;
    right: 10px;
}
.modal-body {
    margin: 40px 20px;
}
.modal-title {
    font-size: 32px;
    font-weight: 600;
}
.label-auth {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    span {
        margin-right: 50px;
    }
    input {
        margin-left: 40px;
    }
    input + input {
        margin-bottom: 10px;
    }
}
</style>