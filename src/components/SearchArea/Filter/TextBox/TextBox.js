import Vue from 'vue'
import Component from 'vue-class-component'

export default Component({
  name: 'SearchTextBox',
})(class SearchTextBoxr extends Vue {
  placeholder = '\uf002 Filter Data Sources...'

  changeText({ target }) {
    if (target.value.length > 3) {
      this.$emit('onClick', target.value)
    }
  }
})
