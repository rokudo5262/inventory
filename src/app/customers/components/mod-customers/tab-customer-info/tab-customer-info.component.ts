import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-tab-customer-info',
  template: `
  <form>
    <div class="row">
      <div class="col-lg-2 col-md-12 avatar">
        <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" >
        <input type="file" id="avatar-file" name="logo" style="display: none;"><br>
        <button id="choose" type="button" nbButton status="info" class="btnUploadAvatar" nbTooltip="Choose image" nbTooltipPlacement="bottom" style="font-size: 12px;"><i class="fas fa-image"></i>Choose image</button>
      </div>
      <div class="col-lg-5 col-md-12">
        <div class="form-group row">
          <label class="label col-sm-3 col-form-label">Customer Type</label>
          <div class="col-sm-9">
            <nb-radio-group [(value)]="customerType" class="row" name="type">
              <nb-radio
                value="personal">
                Personal
              </nb-radio>
              <nb-radio
                value="company">
                Company
              </nb-radio>
            </nb-radio-group>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputName" class="label col-sm-3 col-form-label">Customer ID</label>
          <div class="col-sm-9">
            <input type="cID" nbInput fullWidth id="cID" placeholder="Default ID" disabled>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputName" class="label col-sm-3 col-form-label">Customer Name</label>
          <div class="col-sm-9">
            <input type="name" nbInput fullWidth id="inputName">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPhone" class="label col-sm-3 col-form-label">Phone</label>
          <div class="col-sm-9">
            <input type="phone" nbInput fullWidth id="inputPhone">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPhone" class="label col-sm-3 col-form-label">DoB</label>
          <div class="col-sm-9">
            <input nbInput fullWidth
              [nbDatepicker]="formpicker">
            <nb-datepicker #formpicker></nb-datepicker>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputAddress" class="label col-sm-3 col-form-label">Address</label>
          <div class="col-sm-9">
            <input type="address" nbInput fullWidth id="inputAddress">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputDistrict" class="label col-sm-3 col-form-label">District</label>
          <div class="col-sm-9">
            <nb-select selected="0" fullWidth>
              <nb-option value="0">Choose District</nb-option>
              <nb-option value="1">District 1</nb-option>
              <nb-option value="2">District 2</nb-option>
            </nb-select>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputWard" class="label col-sm-3 col-form-label">Ward</label>
          <div class="col-sm-9">
            <nb-select selected="0" fullWidth>
              <nb-option value="0">Choose Ward</nb-option>
              <nb-option value="1">Ward 1</nb-option>
              <nb-option value="2">Ward 2</nb-option>
            </nb-select>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputGroup" class="label col-sm-3 col-form-label">Group</label>
          <div class="col-sm-9">
            <input type="group" nbInput fullWidth id="inputGroup">
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-12">
        <div class="form-group row">
          <label for="inputbName" class="label col-sm-3 col-form-label">Branch Name</label>
          <div class="col-sm-9">
            <input type="bname" nbInput fullWidth id="inputbName" disabled>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputTax" class="label col-sm-3 col-form-label">Tax code</label>
          <div class="col-sm-9">
            <input type="tax" nbInput fullWidth id="inputTax">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputGender" class="label col-sm-3 col-form-label">Gender</label>
          <div class="col-sm-9">
            <nb-radio-group [(value)]="gender" class="row" name="gender">
              <nb-radio
                value="male">
                Male
              </nb-radio>
              <nb-radio
                value="female">
                Female
              </nb-radio>
            </nb-radio-group>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail" class="label col-sm-3 col-form-label">Email</label>
          <div class="col-sm-9">
            <input type="email" nbInput fullWidth id="inputEmail">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputFb" class="label col-sm-3 col-form-label">Facebook</label>
          <div class="col-sm-9">
            <input type="fb" nbInput fullWidth id="inputFb">
          </div>
        </div>
        <div class="form-group row">
          <label for="inputNotes" class="label col-sm-3 col-form-label">Notes</label>
          <div class="col-sm-9">
            <textarea type="notes" nbInput fullWidth id="inputNotes" rows="8"></textarea>
          </div>
        </div>
      </div>
    </div>
  </form>
  <div class="button">
    <button class="btn btnUpdate" type="update" nbButton status="success" nbTooltip="Update" nbTooltipPlacement="top"><i class="fas fa-check-square"></i><span>Update</span></button>
    <button class="btn btnDeactivate" type="deactivate" nbButton status="danger" nbTooltip="Deactivate" nbTooltipPlacement="top"><i class="fas fa-lock"></i><span>Deactivate</span></button>
    <!-- <button class="btn btnActivate" type="activate" nbButton status="success" nbTooltip="Activate" nbTooltipPlacement="top"><i class="fas fa-lock-open"></i><span>Activate</span></button> -->
    <button class="btn btnDelete" type="delete" nbButton status="danger" nbTooltip="Delete" nbTooltipPlacement="top"><i class="fas fa-trash"></i><span>Delete</span></button>
  </div>
  `,
  styles: [`
    nb-layout-column {
        background-color: white;
    }
    nb-radio-group {
        justify-content: space-evenly;
    }
    form {
        margin-top: 1vw;
    }
    .button {
        float: right;
    }
    .btn {
        margin-left: 10px;
        width: 120px;
    }
    .avatar {
        padding: 0;
    }
    .avatar img {
        width: 140px;
        height: 140px;
        display: block;
        margin: auto;
    }
    .btnUploadAvatar {
        width: 140px;
        display: block;
        margin: auto;
    }
    .btn span {
        margin-left: 5px;
    }
    .fa-image {
        margin-right: 5px;
    }
    @media screen and (max-width: 992px) {
        .avatar img {
            clip-path: circle(70px at 50% 50%);
        }
        .btnUploadAvatar {
            margin-bottom: 20px;
        }
    }
    @media screen and (min-width: 576px) and (max-width: 991px) {
        nb-radio-group {
            display: block;
            margin: 0 auto 0 10vw;
        }
    }
    @media screen and (max-width: 575px) {
        .button {
            margin-right: 10px;
        }
    }
    @media screen and (max-width: 521px) {
        .btn span {
            display: none;
        }
        .btn {
            width: 40px;
        }
      }
    }
  `]
})
export class TabCustomerInfoComponent implements OnInit {
  customerType: string = 'personal';
  gender: string = 'male';
  constructor() { }
  ngOnInit() { }
}
