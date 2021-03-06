'use strict'

module.exports = function setupAgent (AgentModel) {
  const createOrUpdate = async (agent) => {
    const cond = {
      where: {
        uuid: agent.uuid
      }
    }

    const existingAgent = await AgentModel.findOne(cond)

    if (existingAgent) {
      const updated = await AgentModel.update(agent, cond)
      return updated ? AgentModel.findOne(cond) : existingAgent
    }

    const result = await AgentModel.create(agent)
    return result.toJSON()
  }

  const findById = (id) => {
    return AgentModel.findById(id)
  }

  const findByUuid = (uuid) => {
    return AgentModel.findOne({
      where: {
        uuid
      }
    })
  }

  const findAll = () => {
    return AgentModel.findAll()
  }

  const findConnected = () => {
    return AgentModel.findAll({
      where: {
        connected: true
      }
    })
  }

  const findByUsername = (username) => {
    return AgentModel.findAll({
      where: {
        username,
        connected: true
      }
    })
  }

  return {
    findById,
    createOrUpdate,
    findByUuid,
    findAll,
    findConnected,
    findByUsername
  }
}
