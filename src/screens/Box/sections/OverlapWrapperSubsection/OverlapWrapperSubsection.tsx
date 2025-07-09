@@ .. @@
 export const OverlapWrapperSubsection = (): JSX.Element => {
   return (
     <section className="w-full">
-      <Card className="relative w-full border border-orange-200 rounded-xl shadow-lg overflow-hidden">
+      <Card className="relative w-full border-0 rounded-xl shadow-lg overflow-hidden">
         <CardContent className="p-0">
-          <div className="relative w-full h-24 bg-gradient-to-r from-orange-500 to-orange-600">
-            <div className="flex items-center h-full px-6">
-              <div className="relative w-16 h-16 bg-[url(/popupnov06-2019-3.png)] bg-cover bg-center rounded" />
+          <div className="relative w-full h-20 bg-gradient-to-r from-orange-500 to-orange-600">
+            <div className="flex items-center h-full px-8">
+              <div className="relative w-12 h-12 bg-[url(/popupnov06-2019-3.png)] bg-cover bg-center rounded" />

               <div className="flex flex-col ml-6">
-                <h2 className="font-bold text-white text-xl">
+                <h2 className="font-bold text-white text-lg">
                   MEA Performance Dashboard
                 </h2>
-                <p className="text-orange-100 text-sm">
+                <p className="text-orange-100 text-xs">
                   Real-time embassy service statistics
                 </p>
               </div>

               <img
-                className="ml-auto h-24 object-cover"
+                className="ml-auto h-20 object-cover"
                 alt="Dashboard graphics"
                 src="/boost-your-1.png"
               />
             </div>
           </div>
         </CardContent>
       </Card>
     </section>
   );
 };