import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loader: false,
        alerts: [],
        data: {},
        overlay: {
            state: false,
            to: ''
        },
        metaData: null,
        metrics: [],
        globalNotificationSettings: {
            index: 0,
            days: [],
            time: '',
            template: '',
            name: ''
        },
        notifications: [],
        timesheets: []
    },
    mutations: {
        mutateMetaData (state, data) {
            state.metaData = data
        },
        mutateMetrics (state, data) {
            state.metrics = data
        },
        mutateData (state, data) {
            state.data = data
        },
        mutateLoader (state, loader) {
            state.loader = loader
        },
        mutateOverlay (state, overlay) {
            if (overlay) {
                state.overlay = overlay
            } else {
                state.overlay = {
                    state: false,
                    to: ''
                }
            }
        },
        mutateAlerts (state, alert) {
            if (alert) {
                state.alerts.map((existingAlert) => {
                    if (existingAlert.message === alert.message) {
                        existingAlert.active = false
                    }

                    return existingAlert
                })
                state.alerts.push(alert)
            } else {
                state.alerts = []
            }
        },
        mutateGlobalNotificationSettings (state, settings) {
            if (settings) {
                state.globalNotificationSettings = settings
            }
        },
        mutateNotifications (state, data) {
            state.notifications = data
        },
        mutateTimesheets (state, data) {
            state.timesheets = data
        },
    },
    getters: {
        getMetrics (state) {
            return state.metrics
        },
        getMetaData (state) {
            return state.metaData
        },
        getData (state) {
            return state.data
        },
        getLoader (state) {
            return state.loader
        },
        getOverlay (state) {
            return state.overlay
        },
        getAlerts (state) {
            return state.alerts
        },
        getGlobalNotificationSettings (state) {
            return state.globalNotificationSettings
        },
        getNotifications (state) {
            return state.notifications
        },
        getTimesheets (state) {
            return state.timesheets
        },
    },
    actions: {
    }
})
