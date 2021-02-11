var push= require('web-push')
let vapidKeys={
    publicKey: 'BFHSpH8xiBfJQyScs96Rqpd9V_vz_FWHCFYDb_BHEI5NUdJ-JG8NYdCRs4KzgPjvuWm68trYrkRerG_mzWtV1gE',      
    privateKey: 'nndwN_jxZk9I03yVwFEi7RXQFinsOJVhRlYsikEd7oA'
  }

  push.setVapidDetails('mailto:aimegupta@gmail.com',vapidKeys.publicKey,vapidKeys.privateKey)
  let sub={"endpoint":"https://fcm.googleapis.com/fcm/send/crzLA8qT3MhvF2mEKG7UWf:APA91bEa4fXB7vkvyGQielAvHDa7JHMGDiH_zBxtDHY2aP0CTrTJiNLWKzM7NfFRndVwh7dprYwqfO8CLIt-hh1hHc4XCnRAzbghDRf9o01MqHIVD9T-rZhOtwSN8Dm58dtLj8RjQ5Xg","expirationTime":null,"keys":{"p256dh":"BDhhqUonK-RM1Gxx33vB3yHeb_g2hoqRIBy1gF3kff0j2sjBodPezesAVQ7ImpaFp3mETdgQ7ZWsRCxARW0Jg6g","auth":"fYOn7GJKzH1nBxV_JnpJkw"}};
  push.sendNotification(sub,'test message')


  //https://fcm.googleapis.com/fcm/send/crzLA8qT3MhvF2mEKG7UWf:APA91bEa4fXB7vkvyGQielAvHDa7JHMGDiH_zBxtDHY2aP0CTrTJiNLWKzM7NfFRndVwh7dprYwqfO8CLIt-hh1hHc4XCnRAzbghDRf9o01MqHIVD9T-rZhOtwSN8Dm58dtLj8RjQ5Xg