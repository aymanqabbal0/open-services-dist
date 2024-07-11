"use strict";
(self["webpackChunkvuexy"] = self["webpackChunkvuexy"] || []).push([["src_app_main_apps_roles_roles_module_ts"],{

/***/ 19628:
/*!******************************************************************!*\
  !*** ./src/app/main/apps/roles/roles-add/roles-add.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesAddComponent": () => (/* binding */ RolesAddComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../roles.service */ 66934);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/spinner/spinner.component */ 28712);







function RolesAddComponent_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Role name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RolesAddComponent_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Role should have at least 1 permission");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RolesAddComponent_ul_16_li_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 20)(2, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RolesAddComponent_ul_16_li_8_div_6_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const perm_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.saved[perm_r8.value] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const perm_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r7.saved[perm_r8.value])("checked", ctx_r7.selectAll)("id", perm_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", perm_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](perm_r8.name);
  }
}
function RolesAddComponent_ul_16_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 24)(1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RolesAddComponent_ul_16_li_8_div_6_Template, 5, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const module_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, module_r6.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", module_r6.value);
  }
}
function RolesAddComponent_ul_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 18)(1, "li", 19)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Administrator Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 20)(5, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RolesAddComponent_ul_16_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.selectAll = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RolesAddComponent_ul_16_li_8_Template, 7, 4, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.selectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 2, ctx_r2.permissions));
  }
}
function RolesAddComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RolesAddComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 32);
  }
}
class RolesAddComponent {
  constructor(activeModal, toastr, roles) {
    this.activeModal = activeModal;
    this.toastr = toastr;
    this.roles = roles;
    this.role = {};
    this.selectAll = false;
    this.errors = {};
    this.loading = true;
    this.loadingSave = true;
    this.saved = {};
  }
  ngOnInit() {
    this.roles.getRoleTemplate().then(res => {
      this.permissions = res.data.roles_to_display;
      this.loading = false;
      console.log('permissions : ', this.permissions);
    });
  }
  save() {
    this.errors = {};
    this.role.permissions = Object.keys(this.saved).filter(k => this.saved[k]);
    if (!(this.role.name?.length > 2)) {
      this.errors.name = true;
      return;
    } else if (this.role.permissions.length === 0) {
      this.errors.noperm = true;
      return;
    }
    this.loadingSave = true;
    console.log('this.saved role', this.role);
    this.roles.add({
      role_name: this.role.name,
      role_permissions: this.role.permissions
    }).then(res => {
      if (!res.success) {
        throw new Error();
      }
      this.toastr.success('Role Saved Successfully');
      this.loadingSave = false;
      this.activeModal.dismiss();
    }).catch(err => {
      this.toastr.success('Something went wrong.');
    }).finally(() => {
      this.loadingSave = false;
    });
  }
  static #_ = this.ɵfac = function RolesAddComponent_Factory(t) {
    return new (t || RolesAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_roles_service__WEBPACK_IMPORTED_MODULE_0__.RolesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RolesAddComponent,
    selectors: [["app-roles-add"]],
    decls: 23,
    vars: 8,
    consts: [[1, "slideout-content"], [1, "modal-header", "bg-transparent"], ["aria-label", "Close", "type", "button", 1, "close", "cursor-pointer", "shadow", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "px-5"], [1, "mt-5", "text-center", "mb-2"], [1, "text-center"], ["for", "rolename"], ["id", "rolename", "placeholder", "Enter Role Name", 1, "form-control", "w-100", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], [3, "loading"], ["class", "list-group list-group-flush", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", "mb-5"], [1, "btn", "btn-light-secondary", "mr-1", 3, "click"], [1, "btn", "btn-secondary", 3, "disabled", "click"], [4, "ngIf"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "text-danger"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "custom-control", "custom-control-primary", "custom-checkbox"], ["type", "checkbox", "id", "checkAll", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "checkAll", 1, "custom-control-label"], ["class", "list-group-item ", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "row"], [1, "col-6"], [1, "col-6", "row"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModel", "checked", "id", "ngModelChange"], [1, "custom-control-label", 3, "for"], [1, "spinner-border", "spinner-border-sm"]],
    template: function RolesAddComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesAddComponent_Template_button_click_2_listener() {
          return ctx.activeModal.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add New Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Set role permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Role Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RolesAddComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.role.name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RolesAddComponent_small_13_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RolesAddComponent_small_14_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-spinner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RolesAddComponent_ul_16_Template, 10, 4, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesAddComponent_Template_button_click_18_listener() {
          return ctx.activeModal.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesAddComponent_Template_button_click_20_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RolesAddComponent_span_21_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, RolesAddComponent_span_22_Template, 1, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.role.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.noperm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.permissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loadingSave);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loadingSave);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadingSave);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe],
    styles: ["body[_ngcontent-%COMP%] {\n  opacity: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGVzLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJyb2xlcy1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIG9wYWNpdHk6IDEwMDtcclxufVxyXG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9hcHBzL3JvbGVzL3JvbGVzLWFkZC9yb2xlcy1hZGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7QUFDQSw0U0FBNFMiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIG9wYWNpdHk6IDEwMDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 93955:
/*!********************************************************************!*\
  !*** ./src/app/main/apps/roles/roles-edit/roles-edit.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesEditComponent": () => (/* binding */ RolesEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../roles.service */ 66934);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/spinner/spinner.component */ 28712);







function RolesEditComponent_small_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Role name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RolesEditComponent_small_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Role should have at least 1 permission");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RolesEditComponent_ul_16_li_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 20)(2, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RolesEditComponent_ul_16_li_8_div_6_Template_input_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const perm_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.saved[perm_r8.value] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const perm_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("name", perm_r8.value)("ngModel", ctx_r7.saved[perm_r8.value])("id", perm_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("for", perm_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](perm_r8.name);
  }
}
function RolesEditComponent_ul_16_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 24)(1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RolesEditComponent_ul_16_li_8_div_6_Template, 5, 5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const module_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 2, module_r6.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", module_r6.value);
  }
}
function RolesEditComponent_ul_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 18)(1, "li", 19)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Administrator Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 20)(5, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RolesEditComponent_ul_16_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.selectAll = $event);
    })("ngModelChange", function RolesEditComponent_ul_16_Template_input_ngModelChange_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.checkAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RolesEditComponent_ul_16_li_8_Template, 7, 4, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r2.selectAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 2, ctx_r2.permissions));
  }
}
function RolesEditComponent_span_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function RolesEditComponent_span_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 32);
  }
}
class RolesEditComponent {
  constructor(activeModal, toastr, roles) {
    this.activeModal = activeModal;
    this.toastr = toastr;
    this.roles = roles;
    this.role = {};
    this.permissionsList = [];
    this.selectAll = false;
    this.errors = {};
    this.loading = true;
    this.loadingSave = false;
    this.saved = {};
    this.Object = Object;
  }
  ngOnInit() {
    for (let perm of this.role.role_permissions) {
      this.saved[perm] = true;
    }
    console.error('mr saved : ', this.saved);
    this.roles.getRoleTemplate().then(res => {
      this.permissions = res.data.roles_to_display;
      this.permissionsList = [].concat(...Object.values(this.permissions)).map(p => p.value);
      this.loading = false;
      console.log('permissions : ', this.permissions);
      console.log('permissions list  : ', this.permissionsList);
    });
  }
  checkAll() {
    if (this.selectAll) {
      for (let perm of this.permissionsList) {
        this.saved[perm] = true;
      }
    } else {
      this.saved = {};
    }
  }
  save() {
    this.errors = {};
    let role = {
      role_name: this.role.role_name,
      role_permissions: Object.keys(this.saved).filter(k => this.saved[k])
    };
    if (!(this.role.role_name?.length > 2)) {
      this.errors.name = true;
      return;
    } else if (this.role.role_permissions.length === 0) {
      this.errors.noperm = true;
      return;
    }
    this.loadingSave = true;
    console.log('this.saved role', this.role);
    this.roles.update(this.role.role_id, role).then(res => {
      this.toastr.success('Role Saved Successfully');
      this.loadingSave = false;
      this.activeModal.close('reload');
    }).catch(err => {
      this.toastr.success('Something went wrong.');
    }).finally(() => {
      this.loadingSave = false;
    });
  }
  static #_ = this.ɵfac = function RolesEditComponent_Factory(t) {
    return new (t || RolesEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_roles_service__WEBPACK_IMPORTED_MODULE_0__.RolesService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: RolesEditComponent,
    selectors: [["app-roles-edit"]],
    inputs: {
      role: "role"
    },
    decls: 23,
    vars: 8,
    consts: [[1, "slideout-content"], [1, "modal-header", "bg-transparent"], ["aria-label", "Close", "type", "button", 1, "close", "cursor-pointer", "shadow", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "px-5"], [1, "mt-5", "text-center", "mb-2"], [1, "text-center"], ["for", "rolename"], ["id", "rolename", "name", "rolename", "ngDefaultControl", "", "placeholder", "Enter Role Name", 1, "form-control", "w-100", 3, "ngModel", "ngModelChange"], ["class", "text-danger", 4, "ngIf"], [3, "loading"], ["class", "list-group list-group-flush", 4, "ngIf"], [1, "d-flex", "justify-content-center", "align-items-center", "mb-5"], [1, "btn", "btn-light-secondary", "mr-1", 3, "click"], [1, "btn", "btn-secondary", 3, "disabled", "click"], [4, "ngIf"], ["class", "spinner-border spinner-border-sm", 4, "ngIf"], [1, "text-danger"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "custom-control", "custom-control-primary", "custom-checkbox"], ["name", "selectAll", "ngDefaultControl", "", "type", "checkbox", "id", "checkAll", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "checkAll", 1, "custom-control-label"], ["class", "list-group-item ", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "row"], [1, "col-6"], [1, "col-6", "row"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], ["ngDefaultControl", "", "type", "checkbox", 1, "custom-control-input", 3, "name", "ngModel", "id", "ngModelChange"], [1, "custom-control-label", 3, "for"], [1, "spinner-border", "spinner-border-sm"]],
    template: function RolesEditComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesEditComponent_Template_button_click_2_listener() {
          return ctx.activeModal.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Add New Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Set role permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Role Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function RolesEditComponent_Template_input_ngModelChange_12_listener($event) {
          return ctx.role.role_name = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RolesEditComponent_small_13_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RolesEditComponent_small_14_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-spinner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RolesEditComponent_ul_16_Template, 10, 4, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 12)(18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesEditComponent_Template_button_click_18_listener() {
          return ctx.activeModal.dismiss();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RolesEditComponent_Template_button_click_20_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, RolesEditComponent_span_21_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, RolesEditComponent_span_22_Template, 1, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.role.role_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.noperm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.permissions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading || ctx.loadingSave || ctx.Object.values(ctx.saved).length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loadingSave);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loadingSave);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.KeyValuePipe],
    styles: ["body[_ngcontent-%COMP%] {\n  opacity: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGVzLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoicm9sZXMtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgb3BhY2l0eTogMTAwO1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9hcHBzL3JvbGVzL3JvbGVzLWVkaXQvcm9sZXMtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUNBLGdUQUFnVCIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgb3BhY2l0eTogMTAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 63140:
/*!********************************************************************!*\
  !*** ./src/app/main/apps/roles/roles-list/roles-list.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesListComponent": () => (/* binding */ RolesListComponent)
/* harmony export */ });
/* harmony import */ var _auth_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../auth/helpers */ 13569);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../roles-edit/roles-edit.component */ 93955);
/* harmony import */ var _roles_add_roles_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../roles-add/roles-add.component */ 19628);
/* harmony import */ var _user_user_limits_user_limits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user/user-limits/user-limits.component */ 67689);
/* harmony import */ var _user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/user-edit/user-edit.component */ 53483);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ 60598);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../roles.service */ 66934);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../auth/service */ 81004);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/directives/core-ripple-effect/core-ripple-effect.directive */ 75287);
/* harmony import */ var _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/directives/core-feather-icons/core-feather-icons */ 66279);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/spinner/spinner.component */ 28712);



















function RolesListComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "div", 30)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RolesListComponent_div_14_div_1_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5);
      const row_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r4.edit(row_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Edit Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("Total ", row_r3.user_count, " users");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r3.role_name);
  }
}
function RolesListComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, RolesListComponent_div_14_div_1_Template, 9, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r0.withUsers ? ctx_r0.roles2 : ctx_r0.roles);
  }
}
function RolesListComponent_ngx_datatable_39_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 43)(1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function RolesListComponent_ngx_datatable_39_ng_template_3_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r13.selectAll = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "label", 45)(3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx_r7.selectAll)("id", "check" + "all");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", "check" + "all");
  }
}
function RolesListComponent_ngx_datatable_39_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "label", 45)(3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", ctx_r8.selectAll)("id", "check" + row_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("for", "check" + row_r15.id);
  }
}
function RolesListComponent_ngx_datatable_39_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "a", 49)(3, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r16 = ctx.row;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate1"]("routerLink", "/apps/user/user-view/", row_r16.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"]((tmp_1_0 = row_r16.full_name) !== null && tmp_1_0 !== undefined ? tmp_1_0 : row_r16.first_name + " " + row_r16.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" @", row_r16.email, "");
  }
}
function RolesListComponent_ngx_datatable_39_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 1, row_r18.roles == null ? null : row_r18.roles.join(", ")), " ");
  }
}
function RolesListComponent_ngx_datatable_39_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r20 = ctx.row;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", row_r20.customer, " ");
  }
}
function RolesListComponent_ngx_datatable_39_ng_template_13_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("cursor-pointer");
  }
}
function RolesListComponent_ngx_datatable_39_ng_template_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "span", 60);
  }
}
function RolesListComponent_ngx_datatable_39_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 52)(1, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, RolesListComponent_ngx_datatable_39_ng_template_13_span_2_Template, 2, 2, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, RolesListComponent_ngx_datatable_39_ng_template_13_span_3_Template, 1, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 56)(5, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RolesListComponent_ngx_datatable_39_ng_template_13_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25);
      const row_r21 = restoredCtx.row;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r24.openLimits(row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](6, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, " Limits");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RolesListComponent_ngx_datatable_39_ng_template_13_Template_a_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25);
      const row_r21 = restoredCtx.row;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r26.editUser(row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RolesListComponent_ngx_datatable_39_ng_template_13_Template_a_click_11_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r25);
      const row_r21 = restoredCtx.row;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r27.delete(row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r21 = ctx.row;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r12.deletingUsers[row_r21.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r12.deletingUsers[row_r21.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("data-feather", "pause-circle")("size", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("data-feather", "edit")("size", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"]("mr-50");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("data-feather", "trash")("size", 16);
  }
}
function RolesListComponent_ngx_datatable_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ngx-datatable", 33, 34)(2, "ngx-datatable-column", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, RolesListComponent_ngx_datatable_39_ng_template_3_Template, 5, 3, "ng-template", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, RolesListComponent_ngx_datatable_39_ng_template_4_Template, 5, 3, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "ngx-datatable-column", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, RolesListComponent_ngx_datatable_39_ng_template_6_Template, 7, 3, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "ngx-datatable-column", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](8, RolesListComponent_ngx_datatable_39_ng_template_8_Template, 3, 3, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "ngx-datatable-column", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, RolesListComponent_ngx_datatable_39_ng_template_10_Template, 1, 1, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](11, "ngx-datatable-column", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "ngx-datatable-column", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, RolesListComponent_ngx_datatable_39_ng_template_13_Template, 14, 14, "ng-template", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("rows", ctx_r1.users)("rowHeight", 50)("limit", ctx_r1.selectedOption)("columnMode", ctx_r1.ColumnMode.force)("headerHeight", 50)("footerHeight", 50)("scrollbarH", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("width", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("width", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("width", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("width", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("width", 40)("sortable", false);
  }
}
class RolesListComponent {
  constructor(modalService, role, user, toastr) {
    this.modalService = modalService;
    this.role = role;
    this.user = user;
    this.toastr = toastr;
    this.perPage = 10;
    this.selectAll = false;
    this.loading = true;
    this.loadingUsers = true;
    this.deletingUsers = {};
    this.loadingRoles = true;
    this.withUsers = false;
    this.icons = _auth_helpers__WEBPACK_IMPORTED_MODULE_0__.icons;
    this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.ColumnMode;
    this.selectedOption = 5;
  }
  ngOnInit() {
    this.loadRoles();
    this.loadUsers();
  }
  loadRoles() {
    this.loadingRoles = true;
    this.role.get().then(res => {
      this.roles = res.data;
      this.roles2 = this.roles.filter(r => r.user_count);
      this.loadingRoles = false;
    });
  }
  loadUsers() {
    this.loadingUsers = true;
    this.user.get().then(res => {
      this.originalUsers = this.users = res.data;
      this.loadingUsers = false;
    });
  }
  add() {
    let modal = this.modalService.open(_roles_add_roles_add_component__WEBPACK_IMPORTED_MODULE_2__.RolesAddComponent, {
      centered: true,
      size: 'xl'
    });
    modal.componentInstance.role = {};
  }
  edit(role) {
    let modal = this.modalService.open(_roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_1__.RolesEditComponent, {
      centered: true,
      size: 'xl'
    });
    modal.componentInstance.role = role;
    modal.result?.then(r => {
      if (r === 'reload') {
        this.loadRoles();
      }
    });
  }
  editUser(user) {
    console.log('row: ', user);
    const modal = this.modalService.open(_user_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__.UserEditComponent, {
      size: 'lg'
    });
    modal.componentInstance.oldUser = user;
  }
  openLimits(u) {
    let modal = this.modalService.open(_user_user_limits_user_limits_component__WEBPACK_IMPORTED_MODULE_3__.UserLimitsComponent, {
      centered: true,
      size: 'lg'
    });
    modal.componentInstance.userId = u.id;
  }
  delete(user) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7367F0',
      cancelButtonColor: '#E42728',
      confirmButtonText: 'Yes, Remove this user',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1'
      }
    }).then(result => {
      if (result.value) {
        this.deletingUsers[user.id] = true;
        this.user.delete(user.id).then(res => {
          this.loadUsers();
          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
            icon: 'success',
            title: 'Removed!',
            text: 'This user Has Been Removed Successfully!',
            customClass: {
              confirmButton: 'btn btn-success'
            }
          });
        });
      }
    }).catch(error => {
      sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
        icon: 'error',
        title: 'Oops',
        text: 'Something went wrong'
      }).finally(() => {
        delete this.deletingUsers[user.id];
      });
    });
  }
  search(q) {
    q = q.toLowerCase();
    if (!q) {
      this.users = this.originalUsers;
      return;
    }
    this.users = this.originalUsers.filter(u => u.roles.some(r => r.toLowerCase().includes(q)) || ['email', 'first_name', 'last_name', 'full_name'].some(k => u[k]?.toLowerCase()?.includes(q)));
    this.table.offset = 0;
  }
  static #_ = this.ɵfac = function RolesListComponent_Factory(t) {
    return new (t || RolesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_roles_service__WEBPACK_IMPORTED_MODULE_6__.RolesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: RolesListComponent,
    selectors: [["app-roles-list"]],
    viewQuery: function RolesListComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.DatatableComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
      }
    },
    decls: 40,
    vars: 7,
    consts: [[1, "container"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "custom-control", "custom-control-primary", "custom-switch", "d-flex"], [1, "mr-50"], ["type", "checkbox", "checked", "", "id", "customSwitch3", 1, "custom-control-input", 3, "ngModel", "ngModelChange"], ["for", "customSwitch3", 1, "custom-control-label"], [1, "d-none"], [3, "loading"], ["class", "row mt-2", 4, "ngIf"], [1, "card", "card-body"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-2"], [1, "d-flex", "justify-content-between", "align-items-center", "m-1"], ["for", "entries", 1, "d-flex", "align-items-center"], ["id", "entries", 1, "form-control", "mx-25", 3, "ngModel", "ngModelChange"], ["selected", "", "value", "5"], ["value", "10"], ["value", "25"], ["value", "50"], ["value", "100"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-3"], [1, "mr-1"], ["id", "search", "name", "search", "ngDefaultControl", "", "placeholder", "Search User", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-secondary", "d-flex", "mr-1", 3, "click"], ["data-feather", "plus"], [1, "mt-2", 3, "loading"], ["class", "bootstrap core-bootstrap", 3, "rows", "rowHeight", "limit", "columnMode", "headerHeight", "footerHeight", "scrollbarH", 4, "ngIf"], [1, "row", "mt-2"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [1, "mr-1", "card", "card-body"], [1, "mt-2", "d-flex", "justify-content-between", "align-items-center"], [1, "mt-2"], [1, "text-info", 3, "click"], [1, "bootstrap", "core-bootstrap", 3, "rows", "rowHeight", "limit", "columnMode", "headerHeight", "footerHeight", "scrollbarH"], ["table", ""], ["maxWidth", "40"], ["ngx-datatable-header-template", ""], ["ngx-datatable-cell-template", ""], ["name", "User", 3, "width"], ["name", "Role", "prop", "role", 3, "width"], ["name", "Customer", "prop", "currentPlan", 3, "width"], ["name", "Email", "prop", "email", 3, "width"], ["name", "Actions", 3, "width", "sortable"], [1, "custom-control", "custom-control-primary", "custom-checkbox"], ["name", "selectall", "ngDefaultControl", "", "type", "checkbox", 1, "custom-control-input", 3, "ngModel", "id", "ngModelChange"], [1, "custom-control-label", 3, "for"], ["type", "checkbox", 1, "custom-control-input", 3, "checked", "id"], [1, "d-flex", "align-items-center"], [1, "cell-line-height"], [1, "font-medium-1", "d-block", 3, "routerLink"], [1, "font-weight-bold"], [1, "text-muted", "font-small-2"], ["ngbDropdown", "", "container", "body"], ["ngbDropdownToggle", "", "type", "button", "rippleEffect", "", 1, "btn", "icon-btn", "btn-sm", "hide-arrow"], [3, "class", 4, "ngIf"], ["class", "text-danger spinner-border spinner-border-sm", 4, "ngIf"], ["ngbDropdownMenu", ""], ["ngbDropdownItem", "", 3, "click"], [3, "data-feather", "size"], [1, "feather", "icon-more-vertical"], [1, "text-danger", "spinner-border", "spinner-border-sm"]],
    template: function RolesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "Roles List");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 2)(5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "With Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function RolesListComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.withUsers = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "label", 5)(9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "A role provided access to predefined menus and features so that depending on assigned role an administrator can have access to what he need ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](13, "app-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, RolesListComponent_div_14_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "div", 9)(16, "div", 10)(17, "div", 11)(18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](19, "Show ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function RolesListComponent_Template_select_ngModelChange_20_listener($event) {
          return ctx.selectedOption = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](24, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](26, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "100");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](31, " entries");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](32, "div", 19)(33, "div", 20)(34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngModelChange", function RolesListComponent_Template_input_ngModelChange_34_listener($event) {
          return ctx.search($event);
        })("ngModelChange", function RolesListComponent_Template_input_ngModelChange_34_listener($event) {
          return ctx.q = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function RolesListComponent_Template_button_click_35_listener() {
          return ctx.add();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](36, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "Add New Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](38, "app-spinner", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](39, RolesListComponent_ngx_datatable_39_Template, 14, 13, "ngx-datatable", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.withUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("loading", ctx.loadingRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.roles && !ctx.loadingRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.selectedOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngModel", ctx.q);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("loading", ctx.loadingUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.users && !ctx.loadingUsers);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.NgModel, _core_directives_core_ripple_effect_core_ripple_effect_directive__WEBPACK_IMPORTED_MODULE_8__.RippleEffectDirective, _core_directives_core_feather_icons_core_feather_icons__WEBPACK_IMPORTED_MODULE_9__.FeatherIconDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__.NgbDropdownItem, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.DatatableComponent, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.DataTableColumnDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.DataTableColumnHeaderDirective, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_12__.DataTableColumnCellDirective, _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.TitleCasePipe],
    styles: ["body[_ngcontent-%COMP%] {\n  opacity: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGVzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoicm9sZXMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgb3BhY2l0eTogMTAwO1xyXG59XHJcbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi9hcHBzL3JvbGVzL3JvbGVzLWxpc3Qvcm9sZXMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUNBLGdUQUFnVCIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgb3BhY2l0eTogMTAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 88399:
/*!*************************************************!*\
  !*** ./src/app/main/apps/roles/roles.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RolesModule": () => (/* binding */ RolesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./roles-list/roles-list.component */ 63140);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 34534);
/* harmony import */ var _core_common_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@core/common.module */ 75078);
/* harmony import */ var _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@core/directives/directives */ 35455);
/* harmony import */ var _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@core/pipes/pipes.module */ 30021);
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ 93143);
/* harmony import */ var _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./roles-edit/roles-edit.component */ 93955);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 90413);
/* harmony import */ var _roles_add_roles_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles-add/roles-add.component */ 19628);
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ 14092);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);














const routes = [{
  path: '',
  component: _roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_0__.RolesListComponent
}];
class RolesModule {
  static #_ = this.ɵfac = function RolesModule_Factory(t) {
    return new (t || RolesModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: RolesModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.CorePipesModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.NgxDatatableModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule, _components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](RolesModule, {
    declarations: [_roles_list_roles_list_component__WEBPACK_IMPORTED_MODULE_0__.RolesListComponent, _roles_edit_roles_edit_component__WEBPACK_IMPORTED_MODULE_4__.RolesEditComponent, _roles_add_roles_add_component__WEBPACK_IMPORTED_MODULE_5__.RolesAddComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltipModule, _core_common_module__WEBPACK_IMPORTED_MODULE_1__.CoreCommonModule, _core_directives_directives__WEBPACK_IMPORTED_MODULE_2__.CoreDirectivesModule, _core_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_3__.CorePipesModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__.NgxDatatableModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule, _components_components_module__WEBPACK_IMPORTED_MODULE_6__.ComponentsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_main_apps_roles_roles_module_ts.js.map