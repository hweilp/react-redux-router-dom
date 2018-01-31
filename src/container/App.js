import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import price from '../static/img/price.png';
import '../static/css/App.css'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      z_price : '294.73',
      d_price : '0.568',
      z_dianfei : (294.73 / 0.568).toFixed(2),
      hu : 2,
      p_kongTiao : 489,
      b_kongtiao : 621,
      perSon : 2,

      // 另一户
      l_p_kong : 196,
	    l_b_kong : 199
    }
  }
  render() {
    // let kongtiao = (this.state.b_kongtiao - this.state.p_kongTiao) * 2;

    // let gonggongyongdian_price  = (this.state.d_price * kongtiao).toFixed(2);
    // // 另一户
    // let l_kong = this.state.l_b_kong - this.state.l_p_kong;
	  // let l_kong_price = (l_kong * this.state.d_price).toFixed(2);
    //
    //
    // let z_kongt = gonggongyongdian + l_kong;
    // let z_kongt_price = z_kongt * this.state.d_price;

    // let gonggongyongdianliang = this.state.z_dianfei - (kongtiao + l_kong);
	  // 公共用电费用
	  // let gonggongyongdianliang_price = (gonggongyongdianliang * this.state.d_price).toFixed(2);
	  // 单户公共用电费用
	  // let danhugonggongyongdian_price  = (gonggongyongdianliang_price / this.state.hu).toFixed(2);
    return (
       <div className={'App'}>
          <li className={'link_li'} style={styles.link_li}><Link to="/">App</Link></li>
          <li style={{}}><Link to="/home">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
         <div className="row">
           <div className="col-md-1">.col-md-1</div>
           <div className="col-md-1">.col-md-1</div>
           <div className="col-md-1">.col-md-1</div>
           <div className="col-md-1">.col-md-1</div>
           <div className="col-md-1">.col-md-1</div>
           <div className="col-md-1">.col-md-1</div>
           <div className="col-md-1">.col-md-1</div>
           <div className="col-md-1">.col-md-1</div>
           <div className="col-md-1">.col-md-1</div>
           <div className="col-md-1">.col-md-1</div>
           <div className="col-md-1">.col-md-1</div>
           <div className="col-md-1">.col-md-1</div>
         </div>

         <form style={{width:500,margin:'auto'}}>
           <div className="form-group">
             <label htmlFor="exampleInputEmail1">Email address</label>
             <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
           </div>
           <div className="form-group">
             <label htmlFor="exampleInputPassword1">Password</label>
             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
           </div>
           <div className="form-group">
             <label htmlFor="exampleInputFile">File input</label>
             <input type="file" id="exampleInputFile"/>
               <p className="help-block">Example block-level help text here.</p>
           </div>
           <div className="checkbox">
             <label>
               <input type="checkbox"/> Check me out
             </label>
           </div>
           <button type="submit" className="btn btn-default">Submit</button>
         </form>
         <div>
           <a className="btn btn-default"  role="button">Link</a>
           <button className="btn btn-default" type="submit">Button</button>
           <input className="btn btn-default" type="button" value="Input"/>
             <input className="btn btn-default" type="submit" value="Submit"/>
         </div>

         <form className="navbar-form navbar-left" role="search">
           <div className="form-group">
             <input type="text" className="form-control" placeholder="Search"/>
           </div>
           <button type="submit" className="btn btn-default">Submit</button>
         </form>
          {/*<div classNameName={'main'}>*/}
            {/*<div classNameName={'item'}>*/}
              {/*总电费 ：{this.state.z_price}元 &nbsp; <br/>*/}
              {/*单价(元/度) ： {this.state.d_price} （峰电:8:00到22:00）  &nbsp;<br/>*/}
              {/*月度用电 ：{this.state.z_price} 元/ {this.state.d_price} = {this.state.z_dianfei }度<br/>*/}
              {/*<div style={{marginTop:30}}>空调用电</div>*/}

              {/*本人 ： 空调使用 {this.state.b_kongtiao}(本月) - {this.state.p_kongTiao}(上月) = {kongtiao} 度 X {this.state.perSon}( {this.state.perSon} 部 ) = {kongtiao } 度* { this.state.d_price} = {gonggongyongdian_price}元<br/>*/}

              {/*您 ：  空调使用 {this.state.l_b_kong}(本月) - {this.state.l_p_kong}(上月) = {l_kong} 度 * { this.state.d_price} = {l_kong_price}元<br/>*/}
              {/*空调用电总量 ：总共空调用电 {l_kong} + 本人空调使用 {kongtiao} =  { kongtiao + l_kong} 度<br/>*/}

              {/*<div style={{marginTop:30}}>公共用电</div>*/}
              {/*公共用电总量 = 月度用电{this.state.z_dianfei} - 空调用电总量 { kongtiao + l_kong} = {gonggongyongdianliang} 度<br/>*/}
              {/*公共用电费用 = 公共用电总量 {gonggongyongdianliang} * 单价(元/度) {this.state.d_price} = { gonggongyongdianliang_price}元<br/>*/}
              {/*单户公共用电费用 = 公共用电费用 {gonggongyongdianliang_price}元 / {this.state.hu} = {danhugonggongyongdian_price} 元*/}
              {/*<div style={{marginTop:40}}/>*/}
              {/*<span classNameName={'l_price'}>您本月用电费用为  :  单户公共用电费用 {danhugonggongyongdian_price} 元  + 您空调用电费用{l_kong_price}元 = {Number(danhugonggongyongdian_price) + Number(l_kong_price) }元</span>*/}
            {/*</div>*/}
            {/*<div classNameName={'img'}><img src={price} alt="" style={{height:500,width:900}}/></div>*/}
          {/*</div>*/}
        </div>
      )
  }
};

const styles = {
	link_li : {
	  color:'red',
    background : 'yellow',
    border : '1px solid #ccc',
    borderRadius : '10px'
  }
};
