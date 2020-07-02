[keyple-plugin-android-nfc](../../index.md) / [org.eclipse.keyple.plugin.android.nfc](../index.md) / [AndroidNfcReader](index.md) / [processIntent](./process-intent.md)

# processIntent

`abstract fun processIntent(intent: `[`Intent`](https://developer.android.com/reference/android/content/Intent.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html)

Process data from NFC Intent. Can be use to handle NFC Tag received when app is
triggered by nfc detection

### Parameters

`intent` - : Intent received and filterByProtocol by xml tech_list