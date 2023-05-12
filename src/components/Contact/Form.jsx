const { Component, PropTypes } = React;
const { render } = ReactDOM;

const personalInfoFields = [
  {
    colSize: "5",
    type: "text",
    id: "first-name",
    name: "firstName",
    label: "First Name",
    defaultValue: "John",
    errorText: "First name is required",
    required: true,
    onChange: (e) => _handleChange(e),
  },
  {
    colSize: "5",
    type: "text",
    id: "last-name",
    name: "lastName",
    label: "Last Name",
    defaultValue: "Smith",
    errorText: "Last name is required",
    required: true,
    onChange: (e) => _handleChange(e),
  },
  {
    colSize: "2",
    type: "text",
    id: "mi",
    name: "mi",
    label: "MI",
    defaultValue: "F",
    onChange: (e) => _handleChange(e),
  },
  {
    colSize: "6",
    type: "text",
    id: "email",
    name: "email",
    label: "Email",
    defaultValue: "j.smith@gmail.com",
    errorText: "Email address is required",
    required: true,
    onChange: (e) => _handleChange(e),
  },
  {
    colSize: "6",
    type: "text",
    id: "phone",
    name: "phone",
    label: "Phone",
    maxlength: 12,
    defaultValue: "224-622-9208",
    errorText: "Phone number is required",
    required: true,
    onChange: (e) => _handleChange(e),
  },
  {
    colSize: "7",
    type: "text",
    id: "city",
    name: "city",
    label: "City",
    defaultValue: "Buffalo Grove",
    errorText: "City is required",
    required: true,
    onChange: (e) => _handleChange(e),
  },
  {
    colSize: "2",
    type: "select",
    id: "state",
    name: "state",
    label: "State",
    defaultValue: 13,
    errorText: "State is required",
    required: true,
    onChange: (e) => _handleChange(e),
    options: [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DC",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY",
    ],
  },
  {
    colSize: "3",
    type: "text",
    id: "zip",
    name: "zip",
    label: "ZIP",
    defaultValue: "60089",
    errorText: "ZIP is required",
    required: true,
    onChange: (e) => _handleChange(e),
  },
  {
    type: "textarea",
    id: "comments",
    name: "comments",
    label: "Comments",
    defaultValue: "Blah blah blah...",
    onChange: (e) => _handleChange(e),
  },
  {
    type: "checkbox",
    id: "agree",
    name: "agree",
    label: (
      <span>
        I agree to the <a href="">Terms &amp; Conditions</a>.
      </span>
    ),
    errorText: "Your agreement is required",
    defaultChecked: true,
    required: true,
    onChange: (e) => _handleChange(e),
  },
  {
    type: "submit",
    text: "Submit",
    onClick: () => {
      console.log("Form Submitted!");
    },
  },
];

class Fieldset extends Component {
  constructor(props) {
    super(props);

    this.state = { fieldset: [] };

    this.formFields = [];
  }

  static propTypes = {
    fields: PropTypes.array.isRequired,
    legend: PropTypes.string,
    breakpoint: PropTypes.string,
    className: PropTypes.string,
  };

  static defaultProps = {
    fields: [],
    legend: "",
    className: "",
  };

  componentDidMount() {
    this.setState({ fieldset: this._renderForm() });
  }

  _createGridColumn = (element, colSize) => {
    const { breakpoint } = this.props;
    const breakpointPostfix = breakpoint ? `@${breakpoint}` : "";
    const gridColClass = colSize
      ? `l-grid__col--${colSize}${breakpointPostfix}`
      : "";

    return (
      <div
        key={`col-${Fieldset.createUniqueKey()}`}
        className={`l-grid__col ${gridColClass}`}
      >
        {element}
      </div>
    );
  };

  _mapToFormModel = (props) => {
    let { formFields, _createGridColumn } = this;
    const colSize = props.colSize || null;
    const hasError = props.hasError ? "has-error" : "";
    const attrs = _.omit(props, ["label", "className", "colSize", "options"]);

    switch (props.type) {
      case "email":
      case "text":
      case "number":
        formFields.push(
          _createGridColumn(
            <div className="form-item">
              <label>{props.label}</label>
              <input className={`${props.className} ${hasError}`} {...attrs} />
              <div className="error-text">{props.errorText}</div>
            </div>,
            colSize
          )
        );
        break;
      case "textarea":
        formFields.push(
          _createGridColumn(
            <div className="form-item">
              <label>{props.label}</label>
              <textarea className={`${props.className} ${hasError}`} {...attrs}>
                {props.value}
              </textarea>
              <div className="error-text">{props.errorText}</div>
            </div>,
            colSize
          )
        );
        break;
      case "select":
        formFields.push(
          _createGridColumn(
            <div className="form-item">
              <label>{props.label}</label>
              <select
                className={`${props.className} ${hasError}`}
                onChange={props.onChange}
              >
                <option value="">Select State</option>
                {_.map(props.options, (option, i) => {
                  return (
                    <option
                      className={hasError}
                      key={`option-${Fieldset.createUniqueKey()}`}
                      value={i}
                      selected={i === props.defaultValue}
                    >
                      {option}
                    </option>
                  );
                })}
              </select>
              <div className="error-text">{props.errorText}</div>
            </div>,
            colSize
          )
        );
        break;
      case "checkbox":
      case "radio":
        formFields.push(
          _createGridColumn(
            <div className="form-item">
              <input
                className={`${props.className} ${hasError}`}
                key={`col-${Fieldset.createUniqueKey()}`}
                {...attrs}
              />
              <label>{props.label}</label>
              <div className="error-text">{props.errorText}</div>
            </div>,
            colSize
          )
        );
        break;
      case "submit":
      case "button":
      case "reset":
        formFields.push(
          _createGridColumn(
            <button type={props.type} onClick={props.onClick}>
              {props.text}
            </button>
          ),
          colSize
        );
        break;
    }
  };

  _renderForm = () => {
    const { fields, isHidden, className, breakpoint, _form, ...other } =
      this.props;
    const { _mapToFormModel, formFields } = this;

    fields.forEach((field) => _mapToFormModel(field));

    return (
      <div className={`l-grid ${className}`} {...other}>
        {formFields}
      </div>
    );
  };

  render() {
    const { legend } = this.props;
    const { fieldset } = this.state;

    return (
      <fieldset>
        {legend ? <legend>{legend}</legend> : null}
        {fieldset}
      </fieldset>
    );
  }

  static createUniqueKey() {
    return Math.round(Math.random() * 100000);
  }
}

class App extends Component {
  _handleChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    const { _handleChange } = this;

    return (
      <div className="page">
        <form className="form">
          <Fieldset
            fields={personalInfoFields}
            legend="Personal Information"
            breakpoint="medium"
          />
        </form>
      </div>
    );
  }
}

render(<App />, document.body);
