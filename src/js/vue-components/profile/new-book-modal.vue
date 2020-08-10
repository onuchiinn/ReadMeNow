<template lang="pug">
.card-modal.book-modal
    img(:src="cardbookImg" alt="book-modal-img").book-modal__img
    form(@submit.prevent="onSubmit").book-modal__form
        label.book-modal__title Название книги
        input.book-modal__title.input(v-model="title")
        label.book-modal__author Автор
        input.book-modal__author.input(v-model="author")
        button.btn.card-modal__submit.book-modal__submit(type="submit") Добавить книгу

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    components: {
    },
    data() {
        return {
            title:null,
            author:null,
            cardbookImg: require('../../../images/cardbookImg.jpeg')
        };
    },
    methods: {

        onSubmit() {
            const book = {}
            book.title = this.title
            book.author = this.author
            const user = this.getUser
            this.$store.dispatch('auth/addBook', {user, book})
        }
    },
    computed: {
    ...mapGetters(
    "auth",["getUser"]),
    },
};
</script>
