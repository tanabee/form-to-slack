var slackWebhookUrl = '';// Slack の Webhook URL を入力

function onSubmit(e) {
  var answer = e.response.getItemResponses().map(function (itemResponse) {
    return itemResponse.getItem().getTitle() + ': ' + itemResponse.getResponse();
  }).join('\n');
  var message = [
    '新しい投稿がありました。',
    '```', answer, '```'
  ].join('\n');
  postSlack(slackWebhookUrl, message);
}

function postSlack(webhookUrl, message) {
  UrlFetchApp.fetch(slackWebhookUrl, {
    method: 'POST',
    headers: { "Content-Type": 'application/json' },
    payload: JSON.stringify({ text: message })
  });
}
