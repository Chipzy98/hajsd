<div className="grid-container">
                <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                <Form className="custom-form" onSubmit={handleSubmit} ><br></br><br></br>
                  <Form.Label className="form-label2">Personal Details</Form.Label><br></br><br></br>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFirstname">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" 
                      placeholder="Student First Name" 
                      value={formValues.firstname} 
                      onChange={handleChange} />
                    </Form.Group>
                    <p>{formErrors.firstname}</p>

                    <Form.Group as={Col} controlId="formGridLastname">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" 
                      placeholder="Student Last Name" 
                      value={formValues.lastname} 
                      onChange={handleChange} />
                    </Form.Group>
                    <p>{formErrors.lastname}</p>
                  </Row>

                  <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" 
                      placeholder="Student Full Name" 
                      value={formValues.fullname} 
                      onChange={handleChange} />
                    </Form.Group>
                    <p>{formErrors.fullname}</p>
                  </Row>

                  
                 
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={formValues.address} onChange={handleChange} ></textarea>
                  </div>
                  <p>{formErrors.address}</p>

                  <Button variant="primary" type="next" href="#item-3">
                    Next
                  </Button>
                </Form>
              </div>
            </p>
          </div>