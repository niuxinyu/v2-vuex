<!--<style src="todomvc-app-css/index.css"></style>-->

<!--<template>-->
<!--  <section class="todoapp">-->
<!--    &lt;!&ndash; header &ndash;&gt;-->
<!--    <header class="header">-->
<!--      <h1>todos</h1>-->
<!--      <input class="new-todo"-->
<!--        autofocus-->
<!--        autocomplete="off"-->
<!--        placeholder="What needs to be done?"-->
<!--        @keyup.enter="addTodo">-->
<!--    </header>-->
<!--    &lt;!&ndash; main section &ndash;&gt;-->
<!--    <section class="main" v-show="todos.length">-->
<!--      <input class="toggle-all" id="toggle-all"-->
<!--        type="checkbox"-->
<!--        :checked="allChecked"-->
<!--        @change="toggleAll(!allChecked)">-->
<!--      <label for="toggle-all"></label>-->
<!--      <ul class="todo-list">-->
<!--        <TodoItem-->
<!--          v-for="(todo, index) in filteredTodos"-->
<!--          :key="index"-->
<!--          :todo="todo"-->
<!--        />-->
<!--      </ul>-->
<!--    </section>-->
<!--    &lt;!&ndash; footer &ndash;&gt;-->
<!--    <footer class="footer" v-show="todos.length">-->
<!--      <span class="todo-count">-->
<!--        <strong>{{ remaining }}</strong>-->
<!--        {{ remaining | pluralize('item') }} left-->
<!--      </span>-->
<!--      <ul class="filters">-->
<!--        <li v-for="(val, key) in filters">-->
<!--          <a :href="'#/' + key"-->
<!--            :class="{ selected: visibility === key }"-->
<!--            @click="visibility = key">{{ key | capitalize }}</a>-->
<!--        </li>-->
<!--      </ul>-->
<!--      <button class="clear-completed"-->
<!--        v-show="todos.length > remaining"-->
<!--        @click="clearCompleted">-->
<!--        Clear completed-->
<!--      </button>-->
<!--    </footer>-->
<!--  </section>-->
<!--</template>-->

<!--<script>-->
<!--import { mapActions } from 'vuex'-->
<!--import TodoItem from './TodoItem.vue'-->

<!--const filters = {-->
<!--  all: todos => todos,-->
<!--  active: todos => todos.filter(todo => !todo.done),-->
<!--  completed: todos => todos.filter(todo => todo.done)-->
<!--}-->

<!--export default {-->
<!--  components: { TodoItem },-->
<!--  data () {-->
<!--    return {-->
<!--      visibility: 'all',-->
<!--      filters: filters-->
<!--    }-->
<!--  },-->
<!--  computed: {-->
<!--    todos () {-->
<!--      return this.$store.state.todos-->
<!--    },-->
<!--    allChecked () {-->
<!--      return this.todos.every(todo => todo.done)-->
<!--    },-->
<!--    filteredTodos () {-->
<!--      return filters[this.visibility](this.todos)-->
<!--    },-->
<!--    remaining () {-->
<!--      return this.todos.filter(todo => !todo.done).length-->
<!--    }-->
<!--  },-->
<!--  methods: {-->
<!--    ...mapActions([-->
<!--      'toggleAll',-->
<!--      'clearCompleted'-->
<!--    ]),-->
<!--    addTodo (e) {-->
<!--      const text = e.target.value-->
<!--      if (text.trim()) {-->
<!--        this.$store.dispatch('addTodo', text)-->
<!--      }-->
<!--      e.target.value = ''-->
<!--    }-->
<!--  },-->
<!--  filters: {-->
<!--    pluralize: (n, w) => n === 1 ? w : (w + 's'),-->
<!--    capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)-->
<!--  }-->
<!--}-->
<!--</script>-->

<script src="../store/index.js"></script>
<template>
  <div>
    <h1>姓名：{{ $store.state.name }}</h1>
    <h1>年龄：{{ $store.state.age }}</h1>
    <button @click="handleClick">age+1</button>
    <button @click="handleActionsClick">actions age + 2</button>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$store.commit('plusAge')
    },
    handleActionsClick() {
      this.$store.dispatch('asyncSetAge', 2).then(res => {
        console.log(res);
      })
    }
  },
  created() {
    // console.log(this.getAge);
  },
  computed: {
    getAge () {
      return this.$store.getters.getAge
    }
  }
}
</script>
