"use strict";
(self["webpackChunke_commerce"] = self["webpackChunke_commerce"] || []).push([[4302],{

/***/ 23651:
/***/ ((module) => {

module.exports = JSON.parse('{"attribute.boolean":"布林值","attribute.boolean.description":"好或不好, 1或0, 是或否","attribute.component":"元件","attribute.component.description":"組合欄位值以便重複使用","attribute.date":"日期","attribute.date.description":"時間選擇器，可選擇日期及時間","attribute.datetime":"日期和時間","attribute.dynamiczone":"動態配置","attribute.dynamiczone.description":"動態選擇元件及編輯其內容","attribute.email":"電子郵件地址","attribute.email.description":"驗證格式過的電子郵件欄位","attribute.enumeration":"列舉","attribute.enumeration.description":"列舉設定值並可擇一為值","attribute.json":"JSON","attribute.json.description":"JSON 資料格式","attribute.media":"媒體","attribute.media.description":"圖片,影片 ...... 等檔案","attribute.number":"數字","attribute.number.description":"數字 (正整數, 浮點數, 小數)","attribute.password":"密碼","attribute.password.description":"加密過得密碼欄位","attribute.relation":"關聯","attribute.relation.description":"指向其他集合類型","attribute.richtext":"多文本格式","attribute.richtext.description":"多文本格式編輯器","attribute.text":"文字","attribute.text.description":"短的標題或長的描述文字","attribute.time":"時間","attribute.timestamp":"時間戳記","attribute.uid":"UID","attribute.uid.description":"唯一識別碼","button.attributes.add.another":"新增欄位","button.component.add":"新增元件","button.component.create":"建立新元件","button.model.create":"建立新的集合類型","button.single-types.create":"建立新的單一類型","component.repeatable":"(可重複的)","components.componentSelect.no-component-available":"你已經加入了所有可以加入的元件","components.componentSelect.no-component-available.with-search":"搜尋不到符合的元件","components.componentSelect.value-component":"{number} 個元件被選取 (輸入搜尋元件)","components.componentSelect.value-components":"{number} 個元件被選取","configurations":"配置設定","contentType.collectionName.description":"使用於當內容集合名稱與資料集合名稱不同時","contentType.collectionName.label":"集合名稱","contentType.displayName.label":"顯示名稱","contentType.kind.change.warning":"你變更了內容類型: API 將會被重置 (路由器, 控制器, 和服務將會被覆寫).","error.attributeName.reserved-name":"這個欄位名稱不可以在此內容類型內被使用，有可能會破壞其他功能","error.contentTypeName.reserved-name":"這個內容類型名稱不可以在此專案內被使用，有可能會破壞其他功能","error.validation.enum-duplicate":"不允取重複的值","error.validation.minSupMax":"Can\'t be superior","error.validation.regex":"不合法的正規式","error.validation.relation.targetAttribute-taken":"該欄位名稱已被使用","form.attribute.component.option.add":"新增元件","form.attribute.component.option.create":"建立新元件","form.attribute.component.option.create.description":"一個可以跨元件及類型引用的元件, 可以在任何地方被引用","form.attribute.component.option.repeatable":"可重複的元件","form.attribute.component.option.repeatable.description":"適用於陣列，清單，標籤類型元件","form.attribute.component.option.reuse-existing":"使用一個已建立的元件","form.attribute.component.option.reuse-existing.description":"可複用元件已建立，可以協助你在不同的內容型別間保持資料一致性","form.attribute.component.option.single":"單一元件","form.attribute.component.option.single.description":"適用於組合型欄位群，如：完整地址,基本完整資訊 ......等","form.attribute.item.customColumnName":"自訂欄位名稱","form.attribute.item.customColumnName.description":"將資料庫欄位名稱以更易懂的格式重新命名，對 API 回應很有用。","form.attribute.item.defineRelation.fieldName":"欄位名稱","form.attribute.item.enumeration.graphql":"GraphQL 名稱覆寫","form.attribute.item.enumeration.graphql.description":"可以讓您覆寫 GraphQL 的預設名稱","form.attribute.item.enumeration.placeholder":"例:\\n早上\\n中午\\n晚上","form.attribute.item.enumeration.rules":"值 (格式為一行一個值)","form.attribute.item.maximum":"最大數值","form.attribute.item.maximumLength":"最大長度","form.attribute.item.minimum":"最小數值","form.attribute.item.minimumLength":"最小長度","form.attribute.item.number.type":"數字格式","form.attribute.item.number.type.decimal":"浮點數(decimal) (例: 2.22)","form.attribute.item.number.type.float":"浮點數(float) (例: 3.33333333)","form.attribute.item.number.type.integer":"整數 (例: 10)","form.attribute.item.privateField":"隱密欄位","form.attribute.item.privateField.description":"該欄位不會被顯示在API的回傳資料中","form.attribute.item.requiredField":"必填欄位","form.attribute.item.requiredField.description":"如果這個欄位留空，您將不能建立項目。","form.attribute.item.text.regex":"正規式","form.attribute.item.text.regex.description":"文本正規表達式","form.attribute.item.uniqueField":"唯一欄位","form.attribute.item.uniqueField.description":"如果已存在的項目有一模一樣的內容，您將不能建立項目。","form.attribute.media.allowed-types":"選擇合法的多媒體類型","form.attribute.media.allowed-types.option-files":"檔案","form.attribute.media.allowed-types.option-images":"圖片","form.attribute.media.allowed-types.option-videos":"影片","form.attribute.media.option.multiple":"複數多媒體","form.attribute.media.option.multiple.description":"適用於輪撥模組或多檔案下載","form.attribute.media.option.single":"單一多媒體","form.attribute.media.option.single.description":"適用於大頭貼或背景圖","form.attribute.settings.default":"預設值","form.attribute.text.option.long-text":"長文字","form.attribute.text.option.long-text.description":"適用於描述及自傳內容，但無法被精準搜尋","form.attribute.text.option.short-text":"短文字","form.attribute.text.option.short-text.description":"適用於標題,名稱,連結且可以被精準搜尋","form.button.add-components-to-dynamiczone":"新增元件至動態配置","form.button.add-field":"新增欄位","form.button.add-first-field-to-created-component":"新增元件的第一個欄位","form.button.add.field.to.collectionType":"新增其他欄位於此集合類型","form.button.add.field.to.component":"新增其他欄位於此元件","form.button.add.field.to.contentType":"新增其他欄位於此內容類型","form.button.add.field.to.singleType":"新增其他欄位於此單一類型","form.button.cancel":"取消","form.button.collection-type.description":"適用於複數實例，如議題文章,產品，貼文......等","form.button.configure-component":"配置元件","form.button.configure-view":"配置畫面","form.button.select-component":"選擇一個元件","form.button.single-type.description":"適用於單一實例，如首頁,關於 ...... 等","from":"從","modalForm.attribute.form.base.name.description":"欄位名稱不允許空白","modalForm.attribute.form.base.name.placeholder":"e.g. Slug, SEO URL, Canonical URL","modalForm.attribute.target-field":"關聯目標欄位","modalForm.attributes.select-component":"選擇一個元件","modalForm.attributes.select-components":"選擇多個元件","modalForm.component.header-create":"建立元件","modalForm.components.create-component.category.label":"選擇或新增一個分類","modalForm.components.icon.label":"圖示","modalForm.editCategory.base.name.description":"分類名稱不允許空白","modalForm.header-edit":"編輯 {name}","modalForm.header.categories":"複數分類","modalForm.singleType.header-create":"建立單一型別","modalForm.sub-header.addComponentToDynamicZone":"在動態配置區新增一個元件","modalForm.sub-header.attribute.create":"新增 {type} 欄位","modalForm.sub-header.attribute.create.step":"新增元件 ({step}/2)","modalForm.sub-header.attribute.edit":"編輯 {name}","modalForm.sub-header.chooseAttribute.collectionType":"選擇集合型別的一個欄位","modalForm.sub-header.chooseAttribute.component":"選擇元件的一個欄位","modalForm.sub-header.chooseAttribute.singleType":"選擇單一型別的一個欄位","modelPage.attribute.relation-polymorphic":"關聯 (多對多多型)","modelPage.attribute.relationWith":"關聯到","notification.info.autoreaload-disable":"啟用這個擴充模組需要重新啟動，使用 `strapi develop` 指令重新啟動","notification.info.creating.notSaved":"在建立新的集合型別或元件前請記得儲存","plugin.description.long":"為您的 API 定義資料結構，使您輕鬆新增欄位和關聯結構，您所做的修改會自動更新專案。","plugin.description.short":"為您的 API 定義資料結構","popUpForm.navContainer.advanced":"進階設定","popUpForm.navContainer.base":"基本設定","popUpWarning.bodyMessage.cancel-modifications":"你確定要取消你的修改嗎?","popUpWarning.bodyMessage.cancel-modifications.with-components":"你確定要取消你的修改嗎? 部份元件已被新增或修改...","popUpWarning.bodyMessage.category.delete":"你確定要刪除此分類嗎? 所有此分類內的元件都會被刪除.","popUpWarning.bodyMessage.component.delete":"你確定要刪除此元件嗎?","popUpWarning.bodyMessage.contentType.delete":"您確定要刪除這個資料結構嗎？","prompt.unsaved":"你確定要離開嗎? 所有你的修改都會失效","relation.attributeName.placeholder":"Ex: 作者, 類別, tag...","relation.manyToMany":"有而且屬於許多","relation.manyToOne":"有許多","relation.oneToMany":"屬於許多","relation.oneToOne":"一對一到","relation.oneWay":"有一個"}');

/***/ })

}]);