[keyple-plugin-android-nfc](../../index.md) / [org.eclipse.keyple.plugin.android.nfc](../index.md) / [AndroidNfcReader](./index.md)

# AndroidNfcReader

`interface AndroidNfcReader : SmartRemovalReader`

[SeReader](#) to communicate with NFC Tag though
Android [NfcAdapter](https://developer.android.com/reference/android/nfc/NfcAdapter.html)

Configure NFCAdapter Protocols with [AndroidNfcReaderImpl.setParameter](#)

Optimized for android 4.4 (API 19) to  6.0 (API 23)

### Functions

| [disableNFCReaderMode](disable-n-f-c-reader-mode.md) | Stop app handling NFC Tags while in the foreground`abstract fun disableNFCReaderMode(activity: `[`Activity`](https://developer.android.com/reference/android/app/Activity.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [enableNFCReaderMode](enable-n-f-c-reader-mode.md) | Declare app to handle NFC Tags while in the foreground`abstract fun enableNFCReaderMode(activity: `[`Activity`](https://developer.android.com/reference/android/app/Activity.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |
| [printTagId](print-tag-id.md) | Gets a string describing the low level description of the current tag.`abstract fun printTagId(): `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [processIntent](process-intent.md) | Process data from NFC Intent. Can be use to handle NFC Tag received when app is triggered by nfc detection`abstract fun processIntent(intent: `[`Intent`](https://developer.android.com/reference/android/content/Intent.html)`): `[`Unit`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-unit/index.html) |

### Companion Object Properties

| [FLAG_READER_NO_PLATFORM_SOUNDS](-f-l-a-g_-r-e-a-d-e-r_-n-o_-p-l-a-t-f-o-r-m_-s-o-u-n-d-s.md) | `val FLAG_READER_NO_PLATFORM_SOUNDS: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [FLAG_READER_PRESENCE_CHECK_DELAY](-f-l-a-g_-r-e-a-d-e-r_-p-r-e-s-e-n-c-e_-c-h-e-c-k_-d-e-l-a-y.md) | `val FLAG_READER_PRESENCE_CHECK_DELAY: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [FLAG_READER_SKIP_NDEF_CHECK](-f-l-a-g_-r-e-a-d-e-r_-s-k-i-p_-n-d-e-f_-c-h-e-c-k.md) | `val FLAG_READER_SKIP_NDEF_CHECK: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [PLUGIN_NAME](-p-l-u-g-i-n_-n-a-m-e.md) | `val PLUGIN_NAME: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |
| [READER_NAME](-r-e-a-d-e-r_-n-a-m-e.md) | `val READER_NAME: `[`String`](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html) |

