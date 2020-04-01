import React from "react";
import { Button, Container, Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MaterialTable from "material-table";

const ViewModal = props => {
  const { OpenModal, viewModalData } = { ...props };
  return (
    <React.Fragment>
      <Dialog
        fullWidth="true"
        maxWidth="sm"
        open={OpenModal}
        onClose={() => props.handleClose()}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">User Activity</DialogTitle>
        <DialogContent dividers>
           <Container>
            <Grid container spacing={2}>
              <MaterialTable
                style={{ width: "100%" }}
                data={viewModalData.activity_periods}
                columns={props.viewTableColumn}
                options={{
                  toolbar: false,
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
          </Container>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => props.handleClose()}
            color="primary"
            className="btn-2"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ViewModal;
