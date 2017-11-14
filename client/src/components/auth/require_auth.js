import React, {Component} from 'react';
import PropTypes from 'prop-types'; // To shut react up
import {connect} from 'react-redux'; // All about that state tree

// ComposedComponent because it is composed of more than one thing...
// Kind of.
export default function(ComposedComponent) {
    class Auth extends Component {
        static contextTypes = {
            router: PropTypes.object
        };
        // Lifecycle hooks, how I have missed the (sp?)
        // But not really
        componentWillMount() {
            console.log(`this.props: ${this.props}`);
            if(!this.props.authenticated) {
                // yo.lo. -> context
                this.context.router.history.push('/'); // !this.props.authenticated => !(false) => true

            }
        }

        componentWillUpdate(nextProps) {
            if(!nextProps.authenticated) {
                this.context.router.history.push('/');
            }
        }

        render() {
            // JSX wizardy at work.
            // My guess is if I really dug through whatever builds these,
            // I'd find something setting attributes on XML elements
            // What'd I do with that RFC spec about this...
            return <ComposedComponent {...this.props}/>
        }
    }

    // here's the magic -> since state is fleeting, you need to save it to
    // something that's less volatile. Props will do nicely
    function mapStateToProps(state) {
        return {
            authenticated: state.auth.authenticated,
            authorizedContent: state.auth.authorizedContent
        }
    }

    return connect(mapStateToProps)(Auth);
}