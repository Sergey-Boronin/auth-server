class UserController {

  async registration (req, res, next) {
    try{

    } catch(e) {
      console.log(e);
    }
  }

  async login (req, res, next) {
    try{

    } catch(e) {
      console.log(e);
    }
  }

  async logout (req, res, next) {
    try{

    } catch(e) {
      console.log(e);
    }
  }

  async activate (req, res, next) {
    try{

    } catch(e) {
      console.log(e);
    }
  }

  async refresh (req, res, next) {
    try{

    } catch(e) {
      console.log(e);
    }
  }

  async getUsers (req, res, next) {
    try{
      res.json(['123',[321]])
    } catch(e) {
      console.log(e);
    }
  }
}

export const userController = new UserController();
