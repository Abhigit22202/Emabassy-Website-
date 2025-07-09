@@ .. @@
   return (
-    <div className="w-full max-w-[1200px] mx-auto px-4">
+    <div className="w-full">
       {/* Hero Section with Navigation */}
        <div className="relative w-[1186px] h-[541px] mx-auto overflow-hidden shadow-lg">
-        <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
+        <div className="relative w-[1186px] h-[471px] mx-auto rounded-lg overflow-hidden shadow-lg">
           {/* Navigation Menu */}
          <NavigationMenu className="w-[1186px] h-[70px] bg-[linear-gradient(90deg,rgba(30,58,138,1)_0%,rgba(30,64,175,1)_50%,rgba(67,56,202,1)_100%)]">
            <NavigationMenuList className="flex w-full h-[70px]">
+          <NavigationMenu className="w-[1186px] h-[57.59px] bg-[linear-gradient(90deg,rgba(30,58,138,1)_0%,rgba(30,64,175,1)_50%,rgba(67,56,202,1)_100%)]">
+            <NavigationMenuList className="flex w-full h-full">
               {navItems.map((item, index) => (
                 <div
                   key={index}
                  className={`inline-flex items-center gap-2 px-4 h-[70px] ${
+                  className={`inline-flex items-center gap-2 px-4 h-full ${
                     item.hasBorder ? "border-r border-blue-500" : ""
                   }`}
                 >
@@ .. @@
           </NavigationMenu>

           {/* Hero Banner */}
          <div className="w-[1186px] h-[471px] bg-[url(/lGCKtwgvsrU3WcxwUJCY9vtYHjTPdLo19BUdm6fm.jpeg)] bg-cover bg-center relative">
+          <div className="w-[1186px] h-[413.41px] bg-[url(/lGCKtwgvsrU3WcxwUJCY9vtYHjTPdLo19BUdm6fm.jpeg)] bg-cover bg-center relative">
             {/* Gradient Overlay */}
             <div className="absolute w-full h-full top-0 left-0 shadow-[0px_4px_4px_#00000040] bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(30,30,30,0.64)_74%)]" />

             {/* Banner Content */}
            <div className="absolute bottom-20 left-8 right-8">
+            <div className="absolute bottom-16 left-8 right-8">
               <h1 className="font-bold text-white text-2xl md:text-3xl mb-4">
-              Embassy Officials in a Meeting
+                Embassy Officials in a Meeting
               </h1>
-              <p className="text-white text-base md:text-lg leading-relaxed max-w-4xl">
+              <p className="text-white text-base leading-relaxed max-w-4xl">
                 Embassy Officials in a Meeting with Ms. Sadia Salam and Ms. Joli
                 Divon Saraf, contributors to "The Courage to Begin
                 Again"—a Compelling Anthology of Stories on the Strength of
@@ .. @@
           </div>
         </div>
       </div>

     </div>
   );
 };