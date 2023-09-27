/** @format */

import React, { Component } from "react";
import Item from "../Item";

export default class ListItem extends Component {
  render() {
    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Item</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                #
              </th>
              <th>Name</th>
              <th style={{ width: "15%" }} className="text-center">
                Level
              </th>
              <th style={{ width: "15%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <Item />
            <tr>
              <td className="text-center">2</td>
              <td>Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018</td>
              <td className="text-center">
                <span className="label label-default">Small</span>
              </td>
              <td>
                <button type="button" className="btn btn-warning btn-sm">
                  Edit
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">3</td>
              <td>
                Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo
              </td>
              <td className="text-center">
                <span className="label label-info">Medium</span>
              </td>
              <td>
                <button type="button" className="btn btn-warning btn-sm">
                  Edit
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">4</td>
              <td>Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết</td>
              <td className="text-center">
                <span className="label label-info">Medium</span>
              </td>
              <td>
                <button type="button" className="btn btn-warning btn-sm">
                  Edit
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">5</td>
              <td>
                VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết
              </td>
              <td className="text-center">
                <span className="label label-info">Medium</span>
              </td>
              <td>
                <button type="button" className="btn btn-warning btn-sm">
                  Edit
                </button>
                <button type="button" className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">6</td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  defaultValue="F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020"
                />
              </td>
              <td className="text-center">
                <select className="form-control">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </td>
              <td>
                <button type="button" className="btn btn-default btn-sm">
                  Cancel
                </button>
                <button type="button" className="btn btn-success btn-sm">
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
