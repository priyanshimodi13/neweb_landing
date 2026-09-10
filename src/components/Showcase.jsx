import React, { useState } from 'react';
import { Folder, Search, ArrowUp, CheckCircle, Circle, RefreshCw } from 'lucide-react';

const featureDetails = {
  'No More Bottlenecks': {
    text: "Teams ask live system questions in natural language, with safe access controls and reliable answers.",
    boldText: "Zero waiting for data teams.",
    tasks: [
      { name: 'Bottlenecks Agent', desc: 'Natural Language Query Engine...', status: 'Running' },
      { name: 'Bottlenecks Agent', desc: 'Access Control & Auditing...', status: 'Queued' }
    ]
  },
  'One Trusted View': {
    text: "We connect CRM, ERP, and BI data into a single source of truth — for analytics, ops, and decisions.",
    boldText: "Unified data pipeline active.",
    tasks: [
      { name: 'Trusted View Agent', desc: 'Syncing CRM, ERP & BI pipelines...', status: 'Running' },
      { name: 'Trusted View Agent', desc: 'Synthesizing Source of Truth...', status: 'Queued' }
    ]
  },
  'Safe AI Outputs': {
    text: "LLMs are constrained with code, evals, and human checks — so results stay predictable and auditable.",
    boldText: "Deterministic guardrails engaged.",
    tasks: [
      { name: 'Safe AI Agent', desc: 'Deterministic Code & Evals check...', status: 'Running' },
      { name: 'Safe AI Agent', desc: 'Human-in-the-loop audit log...', status: 'Queued' }
    ]
  },
  'ROI From Tools': {
    text: "We layer agents on top of your existing data lakes and SaaS stack — driving real decisions and workflows without rip-and-replace.",
    boldText: "Maximized software ROI.",
    tasks: [
      { name: 'ROI Agent', desc: 'Deploying agents on data lakes...', status: 'Running' },
      { name: 'ROI Agent', desc: 'SaaS workflow optimization...', status: 'Queued' }
    ]
  },
  'Fast Scenarios': {
    text: '"What If" changes run quickly and correctly with deterministic models, not fragile spreadsheets.',
    boldText: "Instant scenario simulation.",
    tasks: [
      { name: 'Scenario Agent', desc: 'Running What-If simulation model...', status: 'Running' },
      { name: 'Scenario Agent', desc: 'Revenue & Cost risk assessment...', status: 'Queued' }
    ]
  }
};

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedDept, setSelectedDept] = useState('No More Bottlenecks');
  const [inputTask, setInputTask] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'agent',
      agentName: 'No More Bottlenecks Agent',
      text: featureDetails['No More Bottlenecks'].text,
      boldText: featureDetails['No More Bottlenecks'].boldText,
      tasks: featureDetails['No More Bottlenecks'].tasks
    }
  ]);

  const handleSelectNode = (nodeName) => {
    setSelectedDept(nodeName);
    const detail = featureDetails[nodeName];
    if (detail) {
      const newMsg = {
        id: Date.now(),
        type: 'agent',
        agentName: `${nodeName} Agent`,
        text: detail.text,
        boldText: detail.boldText,
        tasks: detail.tasks
      };
      setChatMessages([newMsg]);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputTask.trim()) return;

    const userText = inputTask;
    setInputTask('');

    const newUserMsg = {
      id: Date.now(),
      type: 'user',
      text: userText
    };

    const newAgentMsg = {
      id: Date.now() + 1,
      type: 'agent',
      agentName: `${selectedDept} Agent`,
      text: `Understood! The ${selectedDept} Agent is initializing tasks for "${userText}". Running preliminary data analysis and synthesis now.`,
      boldText: "Tasks dispatched into queue for review.",
      tasks: [
        { name: `${selectedDept} Agent`, desc: `Analyzing ${userText.slice(0, 24)}...`, status: 'Running' },
        { name: `${selectedDept} Agent`, desc: 'Synthesizing output report...', status: 'Queued' }
      ]
    };

    setChatMessages(prev => [...prev, newUserMsg, newAgentMsg]);
  };

  // 5 Feature node definitions positioned symmetrically around Cofounder (cx = 300, cy = 270, Radius = 170)
  const departments = [
    { name: 'No More Bottlenecks', x: 300, y: 100, badge: null },
    { name: 'One Trusted View', x: 462, y: 217, badge: null },
    { name: 'Safe AI Outputs', x: 400, y: 408, badge: null },
    { name: 'ROI From Tools', x: 200, y: 408, badge: null },
    { name: 'Fast Scenarios', x: 138, y: 217, badge: null },
  ];

  return (
    <section id="showcase" className="section" style={{ position: 'relative', background: '#f7f7f4', paddingTop: '70px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '1240px' }}>
        
        {/* Main Canvas Box */}
        <div
          style={{
            background: '#eef0ea',
            borderRadius: '24px',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '24px 28px',
            position: 'relative',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
            display: 'grid',
            gridTemplateColumns: '1fr 400px',
            gap: '24px',
            minHeight: '620px'
          }}
        >

          {/* Left Mindmap Canvas Container */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            
            {/* Top Toolbar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 5 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '16px',
                    padding: '4px 12px',
                    fontSize: '0.8rem',
                    color: '#475569',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>5G</span>
                  <span>General Intelligence...</span>
                  <span style={{ fontSize: '0.65rem' }}>▼</span>
                </div>
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    borderRadius: '16px',
                    padding: '4px 10px',
                    fontSize: '0.78rem',
                    color: '#64748b',
                    border: '1px solid rgba(0, 0, 0, 0.06)'
                  }}
                >
                  Z 60%
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '6px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.06)', cursor: 'pointer' }}>
                  <Folder size={16} color="#475569" />
                </div>
                <div style={{ background: 'rgba(255, 255, 255, 0.8)', padding: '6px', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.06)', cursor: 'pointer' }}>
                  <Search size={16} color="#475569" />
                </div>
              </div>
            </div>

            {/* Central Mindmap Visual Area */}
            <div style={{ position: 'relative', width: '100%', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="600" height="500" viewBox="0 0 600 500" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'visible' }}>
                
                {/* Outer Concentric Dotted Circle */}
                <circle cx="300" cy="270" r="170" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                
                {/* Radial Dashed Connecting Lines */}
                {departments.map((dept, index) => (
                  <line key={index} x1="300" y1="270" x2={dept.x} y2={dept.y} stroke="#cbd5e1" strokeWidth="1.2" strokeDasharray="4 4" />
                ))}

                {/* Center Flower Node - Rendered directly inside SVG for 100% exact alignment */}
                <g transform="translate(300, 270)" style={{ cursor: 'pointer' }}>
                  <circle r="23" fill="#ffffff" stroke="rgba(0, 0, 0, 0.12)" strokeWidth="1" style={{ filter: 'drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.08))' }} />
                  <text x="0" y="7" textAnchor="middle" fontSize="22" style={{ userSelect: 'none' }}>🌻</text>
                </g>
              </svg>

              {/* 8 Radiating Department HTML Pill Nodes */}
              {departments.map((dept, index) => {
                const isSelected = selectedDept === dept.name;
                return (
                  <div
                    key={index}
                    onClick={() => handleSelectNode(dept.name)}
                    style={{
                      position: 'absolute',
                      left: `${dept.x}px`,
                      top: `${dept.y}px`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: 10,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    {/* Worker status pill above connector line if present */}
                    {dept.badge && (
                      <div
                        style={{
                          background: '#ffffff',
                          borderRadius: '10px',
                          padding: '2px 8px',
                          fontSize: '0.65rem',
                          border: '1px solid #e2e8f0',
                          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)',
                          whiteSpace: 'nowrap',
                          marginBottom: '2px'
                        }}
                      >
                        {dept.badge}
                      </div>
                    )}

                    <div
                      style={{
                        background: isSelected ? '#0f172a' : '#ffffff',
                        color: isSelected ? '#ffffff' : '#334155',
                        borderRadius: '12px',
                        padding: '6px 18px',
                        border: isSelected ? '1px solid #0f172a' : '1px solid #e2e8f0',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {dept.name}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Watermark */}
            <div style={{ fontSize: '0.7rem', color: '#94a3b8', zIndex: 5, fontFamily: 'monospace' }}>
              General-intelligence-company/superoptimizers
            </div>
          </div>

          {/* Right Floating Sidebar Agent Chat & Workflow Panel */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              minHeight: '560px'
            }}
          >
            {/* Header Tab Navigation */}
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #f1f5f9',
                  paddingBottom: '12px',
                  marginBottom: '16px'
                }}
              >
                {['Home', 'Company', 'Cofounder', 'Work', 'Context'].map((tab) => {
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        background: isActive ? '#f1f5f9' : 'transparent',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '4px 10px',
                        fontSize: '0.78rem',
                        fontWeight: isActive ? 600 : 400,
                        color: isActive ? '#0f172a' : '#64748b',
                        cursor: 'pointer'
                      }}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              {/* Chat Stream Feed */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxHeight: '410px', overflowY: 'auto', paddingRight: '4px' }}>
                {chatMessages.map((msg) => {
                  if (msg.type === 'user') {
                    return (
                      <div
                        key={msg.id}
                        style={{
                          background: '#f1f5f9',
                          borderRadius: '14px',
                          padding: '12px 16px',
                          alignSelf: 'flex-end',
                          maxWidth: '90%',
                          fontSize: '0.85rem',
                          color: '#1e293b',
                          lineHeight: 1.5
                        }}
                      >
                        {msg.text}
                      </div>
                    );
                  }

                  return (
                    <div key={msg.id} style={{ fontSize: '0.85rem', color: '#334155', lineHeight: 1.5 }}>
                      <div style={{ marginBottom: '10px' }}>
                        <span style={{ color: '#334155', lineHeight: 1.6 }}>
                          {msg.text} <strong style={{ color: '#0f172a', fontWeight: 600 }}>{msg.boldText}</strong>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Input Form at Bottom */}
            <form onSubmit={handleSendMessage} style={{ marginTop: '12px', position: 'relative' }}>
              <input
                type="text"
                placeholder="Ask cofounder to spin up new tasks agents..."
                value={inputTask}
                onChange={(e) => setInputTask(e.target.value)}
                style={{
                  width: '100%',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '10px 42px 10px 14px',
                  fontSize: '0.8rem',
                  color: '#0f172a',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                style={{
                  position: 'absolute',
                  right: '6px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  background: '#0f172a',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <ArrowUp size={14} color="#ffffff" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom 3 Subtitle Highlight Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginTop: '36px',
            fontSize: '0.92rem',
            lineHeight: 1.6
          }}
        >
          <div>
            <strong style={{ color: '#0f172a', fontWeight: 600 }}>Agentic departments</strong>{' '}
            <span style={{ color: '#64748b' }}>— Cofounder is designed to coordinate cross-functional teams autonomously.</span>
          </div>
          <div>
            <strong style={{ color: '#0f172a', fontWeight: 600 }}>Human in the loop</strong>{' '}
            <span style={{ color: '#64748b' }}>— Agents work alongside you, keeping human approval required before launch.</span>
          </div>
          <div>
            <strong style={{ color: '#0f172a', fontWeight: 600 }}>Fully extensible</strong>{' '}
            <span style={{ color: '#64748b' }}>— Easily connect MCP, custom tools, APIs, and databases.</span>
          </div>
        </div>

      </div>
    </section>
  );
}

