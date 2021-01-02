import { action, computed, makeObservable, observable } from 'mobx';
//observable,action,computed,markObserve

class LoginStore {
  constructor() {
    makeObservable(this)
  }

  @observable userList = [
    {
      id: 1,
      username: "admin",
      password: '1234qwer'
    }
  ];

  @action addUser(user){
    const has_been_signed = this.userList.some(item=> item.username===user.username);
    if(has_been_signed){
      return {
        code: 0,
        msg: '已有此账号'
      }
    }
    const idx = this.userList.length + 1;
    this.userList = this.userList.concat({
      id: idx,
      ...user
    })
    return {
      code: 1,
      msg: '注册成功'
    }
  }

  @action can_be_signin(user){
    const res = this.userList.find(item=> item.username===user.username);
    if(!res){
      return {
        code: 0,
        msg: '无此用户'
      }
    }
    if(res && res.password === user.password){
      return {
        code: 1,
        msg: '登陆成功'
      }
    }else{
      return {
        code: 0,
        msg: '密码错误'
      }
    }
  }
}

export default LoginStore