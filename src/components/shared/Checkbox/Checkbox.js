import Vue from 'vue'
import Component from 'vue-class-component'

export default Component({
  name: 'Checkbox',
  props: {
    className: { type: String, default: '' },
    label: String,
    isChecked: { type: Boolean, default: false },
  },
})(class Checkbox extends Vue {
  checked = this.isChecked
  checkboxClass = 'checkbox'

  handleToggle() {
    this.checked = !this.checked
    this.$emit('onClick', this.checked)
  }
})
