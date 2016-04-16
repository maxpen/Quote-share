# Quote share

With Quote share, you can share any text from a textselection to Facebook (as a quote), Twitter (as image) and eaven to Whatsapp (on mobile). You can also highlight text on a site on Desktop!

I need help with:

* Code cleanup
* Integrating a way to share the selected text to Facebook as a quote ([Facebook quote plugin](https://developers.facebook.com/docs/plugins/quote), [share dialog parameters](https://developers.facebook.com/docs/sharing/reference/share-dialog))
* Integrating a way to share an image to Twitter (selected text gets converted to image because of Twitter text limitation). I think I have to integrate an OAuth login so that I can access the API to upload an image.
* redesign options: A way to customize which social networks that should get displayed.
* If a text gets marked, then on hover a "tooltip" should appear where you can remove the selection or change the color.
* Write a proper readme, I'm not that big of a writer
* Create a logo


So, things that I have already done:

* Works on mobile
* Share text over Whatsapp
* Image gets generated with canvas
* Use only Js, not jQuery
* On Mobile the tooltip gets displayed on the bottom because the native text selection menu from the mobile OS gets displayed (copy, paste);
