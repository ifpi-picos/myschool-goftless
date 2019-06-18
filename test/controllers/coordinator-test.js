
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../../src/index";

chai.use(chaiHttp);
const expect = chai.expect;

describe("Coordinator Controller Testing:", ()=>{

  it("Return all coordinators", (done)=>{
    chai.request(app)
    .get('/coordinators')
    .end((err, res)=>{
      expect(res).to.have.status(200);
      expect(res.body).to.be.a('array');
      done();
    });
  });

});