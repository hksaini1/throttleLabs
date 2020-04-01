import React, { Component } from "react";
import MaterialTable from "material-table";
import { tableColumn } from "./userDetailsTableColumn";
import { Grid } from "@material-ui/core";
import View from "./Modal/ViewModal";
import { ViewTableColumn } from "./Modal/viewModalTableColumns";

export class UserDetails extends Component {
  constructor() {
    super();
    this.state = {
      tableColumns: tableColumn(),
      viewTableColumns: ViewTableColumn(),
      userData: [],
      viewModalOpen: false,
      viewModalData: ""
    };
  }
  getUserDetails = async () => {
    try {
      const response = await require("./Test JSON.json");
        if (response.members) {
        const userData = response.members;
        const UserDetails = userData.map((obj, index) => {
          let updObj = { ...obj };
          updObj.srNo = index + 1;
          updObj.action = (
            <span
              className="ViewClickStyle"
              onClick={() => this.onViewModal(obj)}
            >
              View
            </span>
          );

          return updObj;
        });
        this.setState({
          userData: UserDetails
        });
      }
    } catch (e) {}
  };
  onViewModal = obj => {
    this.setState({
      viewModalOpen: true
    });
    this.setState({
      viewModalData: obj
    });
  };
  viewModalClose = () => {
    this.setState({
      viewModalOpen: false
    });
  };
  componentDidMount = () => {
    this.getUserDetails();
  };
  render() {
    const { viewModalOpen, viewModalData, viewTableColumns } = {
      ...this.state
    };
    return (
      <React.Fragment>
        {viewModalOpen ? (
          <View
            OpenModal={true}
            viewModalData={viewModalData}
            viewTableColumn={viewTableColumns}
            handleClose={this.viewModalClose}
          />
        ) : (
          ""
        )}
        <Grid container spacing={4} justify="center" className="agentDashboard">
          <Grid item xs={12}>
            <MaterialTable
              style={{ minHeight: "450px" }}
              title="User Details"
              data={this.state.userData}
              columns={this.state.tableColumns}
              options={{
                search: false,
                selection: false,
                pagination: false,
                sorting: false,
                grouping: false,
                paging: false,
                showPagination: false,
                searchFieldAlignment: "right",
                headerStyle: {
                  pointerEvents: "none"
                },
                searchFieldStyle: {
                  maxWidth: "186px"
                }
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default UserDetails;
