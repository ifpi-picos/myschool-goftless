import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../src/index";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Teacher Controller Testing:", ()=>{

  it("Return all teachers", (done)=>{
    chai.request(app)
    .get('/teachers')
    .end((err, res)=>{
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      done();
    });
  });

});