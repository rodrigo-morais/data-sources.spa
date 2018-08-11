import Vue from 'vue'
import Component from 'vue-class-component'

export default Component({
  name: 'Dropdown',
  props: {
    className: { type: String, default: '' },
    label: String,
    value: String,
    isOpen: { type: Boolean, default: false },
    items: { type: Array, default: [] },
  },
})(class Dropdown extends Vue {
  isVisible = this.isOpen
  currentValue = this.value || (this.items.length > 0 && this.items[0])
  dropdownClass = `dropdown ${this.className}`
  beforeClass = this.isVisible ? 'dropdown__menu--before' : 'dropdown__menu--close'
  standardClass = 'dropdown__menu'

  handleToggle() {
    this.isVisible = !this.isVisible
  }

  selectItem({ target }) {
    this.currentValue = target.innerHTML
    this.handleToggle()
  }
})
