import React from "react";

import TreeContainer from "../Tree/TreeContainer.react.js";
import PeriodPicker from "../PeriodPicker/PeriodPicker.react.js";
import PeriodPickerActions from "../PeriodPicker/PeriodPicker.actions.js";

// for props validation
import State from "../../State.js";

import {Styles} from "material-ui";

class Demo extends React.Component {

    getStyles() {
        return {
            "demo": {
                height: "100%",
                width: "100%",
                paddingTop: "64",
                backgroundColor: Styles.Colors.grey50,
                overflow: "auto"
            }
        };
    }
    render() {
        const appState = this.props.appState;
        const styles = this.getStyles();

        const periodPickerActions = new PeriodPickerActions(appState);
        const periodPickerState = appState.getIn(["periodPicker"]);

        return (
            <div style={styles.demo}>
                <PeriodPicker
                    actions={periodPickerActions}
                    ref="PeriodPicker"
                    state={periodPickerState} />
                <TreeContainer appState={appState}/>
            </div>
        );
    }

}

Demo.contextTypes = {
    router: React.PropTypes.func
};

Demo.propTypes = {
    appState: React.PropTypes.instanceOf(State).isRequired
};

export default Demo;
