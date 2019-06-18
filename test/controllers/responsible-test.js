
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../src/index";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Responsible Controller Testing:", ()=>{

  it("Return all responsibles", (done)=>{
    chai.request(app)
    .get('/responsibles')
    .end((err, res)=>{
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      done();
    });
  });

});