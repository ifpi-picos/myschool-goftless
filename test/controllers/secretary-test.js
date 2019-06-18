
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../src/index";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Teacher Controller Testing:", ()=>{

  it("Return all secretaries", (done)=>{
    chai.request(app)
    .get('/secretaries')
    .end((err, res)=>{
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      done();
    });
  });

});