﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.08
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Должность.
    /// </summary>
    // *** Start programmer edit section *** (Должность CustomAttributes)

    // *** End programmer edit section *** (Должность CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДолжностьE", new string[] {
            "IdДолжности as \'Id должности\'",
            "Наименование as \'Наименование\'"})]
    [View("ДолжностьL", new string[] {
            "IdДолжности as \'Id должности\'",
            "Наименование as \'Наименование\'"})]
    public class Должность : ICSSoft.STORMNET.DataObject
    {
        
        private int fIdДолжности;
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (Должность CustomMembers)

        // *** End programmer edit section *** (Должность CustomMembers)

        
        /// <summary>
        /// IdДолжности.
        /// </summary>
        // *** Start programmer edit section *** (Должность.IdДолжности CustomAttributes)

        // *** End programmer edit section *** (Должность.IdДолжности CustomAttributes)
        public virtual int IdДолжности
        {
            get
            {
                // *** Start programmer edit section *** (Должность.IdДолжности Get start)

                // *** End programmer edit section *** (Должность.IdДолжности Get start)
                int result = this.fIdДолжности;
                // *** Start programmer edit section *** (Должность.IdДолжности Get end)

                // *** End programmer edit section *** (Должность.IdДолжности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должность.IdДолжности Set start)

                // *** End programmer edit section *** (Должность.IdДолжности Set start)
                this.fIdДолжности = value;
                // *** Start programmer edit section *** (Должность.IdДолжности Set end)

                // *** End programmer edit section *** (Должность.IdДолжности Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Должность.Наименование CustomAttributes)

        // *** End programmer edit section *** (Должность.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Должность.Наименование Get start)

                // *** End programmer edit section *** (Должность.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Должность.Наименование Get end)

                // *** End programmer edit section *** (Должность.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должность.Наименование Set start)

                // *** End programmer edit section *** (Должность.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Должность.Наименование Set end)

                // *** End programmer edit section *** (Должность.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДолжностьE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностьE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностьE", typeof(IIS.08.Должность));
                }
            }
            
            /// <summary>
            /// "ДолжностьL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностьL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностьL", typeof(IIS.08.Должность));
                }
            }
        }
    }
}
