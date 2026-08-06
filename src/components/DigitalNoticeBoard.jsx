import React, { useState, useEffect } from 'react';
import './DigitalNoticeBoard.css';

export default function DigitalNoticeBoard() {
    const [activeTab, setActiveTab] = useState('Notice');
    const [notices, setNotices] = useState([]);
    const [upcomings, setUpcomings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Fetch Notices
                const noticesRes = await fetch('/DNB/api_notices.php');
                if (noticesRes.ok) {
                    const noticesData = await noticesRes.json();
                    if (noticesData.status === 'success') {
                        setNotices(noticesData.data);
                    }
                }
                
                // Fetch Upcomings
                const upcomingsRes = await fetch('/DNB/api_upcomings.php');
                if (upcomingsRes.ok) {
                    const upcomingsData = await upcomingsRes.json();
                    if (upcomingsData.status === 'success') {
                        setUpcomings(upcomingsData.data);
                    }
                }
            } catch (err) {
                console.error("Error fetching DNB data:", err);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const openFile = (fileData) => {
        if (!fileData) return;
        
        // Open file in new tab
        const win = window.open();
        if (win) {
            win.document.write(
                `<iframe src="${fileData}" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>`
            );
        }
    };

    return (
        <div className="dnb-container">
            <div className="dnb-header">
                <div 
                    className={`dnb-tab ${activeTab === 'Notice' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Notice')}
                >
                    <i className="fa-solid fa-bullhorn"></i> Notice
                </div>
                <div 
                    className={`dnb-tab ${activeTab === 'Upcomings' ? 'active' : ''}`}
                    onClick={() => setActiveTab('Upcomings')}
                >
                    <i className="fa-solid fa-calendar-alt"></i> Upcomings
                </div>
            </div>

            <div className="dnb-content">
                <table className="dnb-table">
                    <thead>
                        <tr>
                            <th style={{ width: '15%' }}>Sl.No</th>
                            <th>{activeTab === 'Notice' ? 'Notice' : 'Upcomings'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="2" className="dnb-loading">Loading...</td>
                            </tr>
                        ) : activeTab === 'Notice' ? (
                            notices.length > 0 ? notices.map((notice, index) => (
                                <tr key={notice.id || index} onClick={() => openFile(notice.file_data)} style={{ cursor: notice.file_data ? 'pointer' : 'default' }}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="dnb-title-row">
                                            <span className="dnb-title">{notice.title}</span>
                                            {notice.is_new && <span className="dnb-new-badge">New</span>}
                                            {notice.file_data && (
                                                <i className={`fa-solid ${notice.type === 'pdf' ? 'fa-file-pdf' : 'fa-image'} dnb-file-icon`}></i>
                                            )}
                                        </div>
                                        {notice.description && <p className="dnb-desc">{notice.description}</p>}
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="2" className="dnb-empty">No notices available</td>
                                </tr>
                            )
                        ) : (
                            upcomings.length > 0 ? upcomings.map((upcoming, index) => (
                                <tr key={index} onClick={() => openFile(upcoming.file_data)} style={{ cursor: upcoming.file_data ? 'pointer' : 'default' }}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="dnb-title-row">
                                            <span className="dnb-title">{upcoming.title}</span>
                                            {upcoming.file_data && (
                                                <i className={`fa-solid ${upcoming.type === 'pdf' ? 'fa-file-pdf' : 'fa-image'} dnb-file-icon`}></i>
                                            )}
                                        </div>
                                        {upcoming.description && <p className="dnb-desc">{upcoming.description}</p>}
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="2" className="dnb-empty">No upcoming events</td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
