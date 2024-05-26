import React from 'react'
import Navbar from '../../../layouts/admin/components/Navbar'
import Header from '../../../layouts/admin/components/Header'
import Footer from '../../../layouts/admin/components/Footer'

const ManageStaff = () => {
  return (
    <>
      <Navbar />
      <section className="main_content dashboard_part">
        <div className="container-fluid g-0">
          <div className="row">
            <div className="col-lg-12 p-0">
              <Header />
            </div>
          </div>
        </div>
        <div className="main_content_iner ">
          <div className="container-fluid plr_30 body_white_bg pt_30">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="QA_section">
                  <div className="white_box_tittle list_header">
                    <h4>Danh sách nhân viên</h4>
                    <div className="box_right d-flex lms_block">
                      <div className="serach_field_2">
                        <div className="search_inner">
                          <form >
                            <div className="search_field">
                              <input type="text" placeholder="Tìm kiếm..." />
                            </div>
                            <button type="submit"> <i className="ti-search"></i> </button>
                          </form>
                        </div>
                      </div>
                      <div className="add_button ms-2">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#addcategory" className="btn_1">Thêm tài khoản mới</a>
                      </div>
                    </div>
                  </div>
                  <div className="QA_table ">

                    <table className="table lms_table_active">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Tên tài khoản</th>
                          <th scope="col">Họ và tên</th>
                          <th scope="col">Email</th>
                          <th scope="col">Số điện thoại</th>
                          <th scope="col">Trạng thái</th>
                          <th scope="col">Thao tác</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row"> <a href="#" className="question_content"> 1</a></th>
                          <td>Nhân viên 1</td>
                          <td>Lê Quang Sơn</td>
                          <td>lequangson@gmail.com</td>
                          <td>0999990999</td>
                          <td><a href="#" className="status_btn">Active</a></td>
                          <td><a href="#" className="btn btn-sm btn-warning">Xem</a><a href="#" className="btn btn-sm btn-danger">Xóa</a></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>

    </>
  )
}

export default ManageStaff
