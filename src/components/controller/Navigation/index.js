import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { logoutUserRequest } from 'actions';
import NavigationView from 'components/view/Navigation';

const mapStateToProps = (state) => {

    return {
        user: state.user,
        config: state.config,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logoutUserRequest()),
    }
};

const NavigationController = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(NavigationView));

export default NavigationController;
