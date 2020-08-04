import {ToyReact, Component} from './ToyReact'

class MyComponent extends Component{
  reder() {
    return <div>
      <span>Hello</span>
      <span>world</span>
      <span>!!!</span>
      <div>
        { true }
        { this.children }
      </div>
    </div>
  }
}

let a = <MyComponent name='a' id='ida'>
  <div>1233</div>
</MyComponent>

ToyReact.render(
  a,
  document.body
)