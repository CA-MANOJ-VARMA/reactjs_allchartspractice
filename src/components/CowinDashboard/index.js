// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

const apiConstants = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {
    apiStatus: apiConstants.initial,
    data: [],
    vaccinationByAge: [],
    vaccinationByGender: [],
  }

  componentDidMount() {
    this.fetchingChartsData()
  }

  fetchingChartsData = async () => {
    this.setState({apiStatus: apiConstants.progress})
    const apiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    // const options = {
    //   method: 'GET',
    // }
    const response = await fetch(apiUrl)
    console.log(response)
    if (response.ok === true) {
      const jsonData = await response.json()
      console.log(jsonData)
      const data = jsonData.last_7_days_vaccination
      const vaccinationByAge = jsonData.vaccination_by_age
      const vaccinationByGender = jsonData.vaccination_by_gender
      this.setState({
        data,
        vaccinationByAge,
        vaccinationByGender,
      })
      console.log(jsonData)
      this.setState({apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  loaderFunction = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  successView = () => {
    const {data, vaccinationByAge, vaccinationByGender} = this.state
    return (
      <>
        <VaccinationCoverage data={data} />
        <VaccinationByGender dataGender={vaccinationByGender} />
        <VaccinationByAge dataAge={vaccinationByAge} />
      </>
    )
  }

  failureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  switchData = () => {
    const {apiStatus} = this.state
    console.log(apiStatus)
    switch (apiStatus) {
      case apiConstants.progress:
        return this.loaderFunction()
      case apiConstants.success:
        return this.successView()
      case apiConstants.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="css-all-charts-container">
        <div className="css-websitelogo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="css-websitelogo-image-itself"
          />
          <p>Co-WIN</p>
        </div>
        <h1>CoWIN Vaccination in India</h1>
        <div className="css-allchats-container">{this.switchData()}</div>
      </div>
    )
  }
}

export default CowinDashboard
