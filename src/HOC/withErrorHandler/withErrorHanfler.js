import React from "react";
import Modal from './../../components/UI/Modal/Modal'
import Auxiliary from '../Auxiliary'
const withErrorHandler = (WrappedComponent,axios)=>{
    return class extends React.Component{
        state={
            error :false,
        }
        componentWillMount(){
            this.reqInter  = axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req;
            })
            this.resInter = axios.interceptors.response.use(res=>res,error=>{
                this.setState({error:error})
                
            }  )
        }   
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInter)
            axios.interceptors.request.eject(this.resInter)
        }
        errorConfirmedHandler=()=>{
            this.setState({error:null})
        }
        render(){
                return(
                    <Auxiliary>
                        <Modal show={this.state.error}
                        modalClose={this.errorConfirmedHandler}>
                            {this.state.error? this.state.error.message:null}!
                            </Modal>
                    <WrappedComponent {...this.props}></WrappedComponent>
                    </Auxiliary>
                )
            }
        }

    }
        
export default withErrorHandler;