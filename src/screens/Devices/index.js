import React, { useState, useEffect } from 'react'
import t from 'prop-types'

import api from '~/services/api'

import Loading from '~/components/Loading'

import Device from './Device'

import { Container, List } from './styled'

const gradients = {
  Televisão: ['#1e3c72', '#2a5298'],
  Ventilador: ['#48b1bf', '#06beb6'],
  'Ar condicionado': ['#eb3349', '#f45c43']
}

export default function Devices ({ navigation }) {
  const [loading, setLoading] = useState(false)
  const [devices, setDevices] = useState([])

  useEffect(() => {
    async function fetchDevices () {
      try {
        setLoading(true)

        const response = await api.get('client/devices')

        const data = response.data.map(item => ({
          ...item,
          gradient: gradients[item._id]
        }))

        setDevices(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchDevices()
  }, [])

  function handleDevice (data) {
    navigation.navigate('Brands', { data })
  }

  return (
    <Container>
      {loading && <Loading />}

      {!loading && (
        <List
          data={devices}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            const { _id: name, data, gradient } = item

            return (
              <Device
                name={name}
                gradient={gradient}
                handleDevice={() => handleDevice(data)}
              />
            )
          }}
        />
      )}
    </Container>
  )
}

Devices.propTypes = {
  navigation: t.shape({
    navigate: t.func
  }).isRequired
}
