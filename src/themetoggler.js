
export function ThemeToggler(props){
    let {mode} = props;
    let modeText = mode == 'dark' ? 'dark' : 'light';
    let bgColor = mode == 'dark' ? 'bg-dark' : 'bg-light';
    let textclass = mode == 'dark' ? 'lighttext' : 'darktext';
    return(
        <div className="container">
        <div className="row">
            <div className="form-check form-switch toggler">
                <input className="form-check-input bg-dark" defaultChecked type="checkbox" id="flexSwitchCheckDefault" />
            </div>
        </div>
        </div>
    )
}